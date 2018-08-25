"""
This Django app has been highly influenced by django tagulous
"""
from django.db import connection, models, router, transaction, IntegrityError
from django.utils import six
from django.utils.encoding import python_2_unicode_compatible
from django.utils.text import slugify

from django.conf import settings


User = settings.AUTH_USER_MODEL
with_metaclass = six.with_metaclass
transaction_atomic = transaction.atomic

from Tag import constants
from Tag import settings
from Tag import utils
from Tag.models.options import TagOptions

"""
Although this will be benchmarking django tagulous, it will deviate away from many of its components, thus being a bit different. 
However the logic itself is heavily based on Tagulous. Understanding Django Tagulous will help understanding the code of this app.
Also, The Tag model will be explicitly declared in this file unlike Tagulous. Be aware!! 
Remember!!! tags are made to be case insensitive!
"""


###############################################################################
# Abstract base class for all TagModel models
###############################################################################

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#       Metaclass for tag models
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

class TagModelBase(models.base.ModelBase):

    def __new__(cls, name, bases, attrs):
        # Set up as normal
        new_cls = super(TagModelBase, cls).__new__(cls, name, bases, attrs)

        # TagMeta takes priority for the model
        new_tag_options = None
        # Failing that, look for a direct tag_options setting
        # It will probably have been passed by BaseTagField.contribute_to_class
        if 'tag_options' in attrs:
            new_tag_options = attrs['tag_options']

        # Otherwise start a new one
        else:
            new_tag_options = TagOptions()

        # See if there's anything to inherit
        # This also means that tag_options will be available on abstract models
        if hasattr(new_cls, 'tag_options'):
            # Inherit by setting missing values in place
            new_tag_options.set_missing(new_cls.tag_options)

        # Assign
        new_cls.tag_options = new_tag_options

        return new_cls

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#       Empty abstract model
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #


@python_2_unicode_compatible
class BaseTagModel(with_metaclass(TagModelBase, models.Model)):
    """
    Empty abstract base class for tag models
    This is used when dynamically building models, eg by South in migrations
    """
    class Meta:
        abstract = True

    def __str__(self):
        return six.text_type(self.name)

    def __eq__(self, obj):
        """
        If comparing to a string, is equal if string value matches
        Otherwise compares normally
        """
        if isinstance(obj, six.string_types):
            return self.name == obj
        return super(BaseTagModel, self).__eq__(obj)

    def __ne__(self, obj):
        return not self == obj

    def get_absolute_url(self):
        if self.tag_options.get_absolute_url is None:
            raise AttributeError(
                "'%s' has no attribute 'get_absolute_url'" % self.__class__.__name__
            )
        return self.tag_options.get_absolute_url(self)

    @classmethod
    def get_related_fields(cls, include_standard=False):
        """
        Return a list of related tag fields in other models which refer to this
        tag model.
        If include_standard=False (default), only SingleTagFields and
        TagFields will be returned. If True, it will also include ForeignKeys
        and ManyToManyFields.
        In Django 1.7 it will be a list RelatedObjects.
        """
        meta = cls._meta
        if hasattr(meta, 'get_fields'):
            # Django 1.8 uses new meta API
            related_fields = [
                f for f in meta.get_fields()
                if (f.many_to_many or f.one_to_many or f.one_to_one)
                and f.auto_created
            ]
        else:
            related_fields = meta.get_all_related_objects()
            related_fields += meta.get_all_related_many_to_many_objects()
        if include_standard:
            return related_fields
        return [
            f for f in related_fields
            if isinstance(f.field, (
                Tag.models.fields.TagField,
            ))
        ]

    def get_related_objects(
        self, flat=False, distinct=False, include_standard=False,
    ):
        """
        Get any instances of other models which refer to this tag instance
        If flat=False, returns the following data structure:
            [
                [related_model, related_field, [instance, instance, ...],
                [related_model, related_field, [instance, instance, ...],
                ...
            ]
        If flat=False, the distinct argument is ignored. Models and fields
        will only be included if they refer to this specific tag - there will
        not be any empty lists of instances.
        If flat=True, returns a list of instances without any information about
        how they are related:
            [ instance, instance, ... ]
        If flat=True and distinct=True, only unique instances will be returned.
        If include_standard=False (default), only SingleTagFields and
        TagFieelds will be returned. If True, it will also include ForeignKeys
        and ManyToManyFields.
        """
        data = []
        for related in self.get_related_fields(include_standard=include_standard):
            if django.VERSION < (1, 8):
                related_modl = related.model
            else:
                related_model = related.related_model

            objs = related_model._base_manager.using(
                router.db_for_write(self.tag_model)
            ).filter(
                **{"%s" % related.field.name: self}
            )
            if not objs:
                continue
            if flat:
                data.extend(objs)
            else:
                data.append([related_model, related.field, objs])
        if flat and distinct:
            data = list(set(data))
        return data

    def try_delete(self, force_delete=False):
        # check if any is existing
        exists = GlobalTagRelation.objects.filter(tag__id=self_id).exists()
        # this may take like hell  depending on the size of table
        if exists:
            self.delete()
    try_delete.alters_data = True

    def _prep_merge_tags(self, tags):
        """
        Ensure tags argument for merge_tags is an iterable of tag objects,
        excluding self
        """
        # Ensure tags is a list of tag instances
        if isinstance(tags, six.string_types):
            tags = utils.parse_tags(
                tags, space_delimiter=self.tag_options.space_delimiter,
            )
        if not isinstance(tags, models.query.QuerySet):
            tags = self.tag_model.objects.filter(name__in=tags)

        # Make sure self isn't in tags
        return tags.exclude(pk=self.pk)

    def merge_tags(self, tags):
        """
        Merge the specified tags into this tag
        """
        related_fields = self.tag_model.get_related_fields()
        tags = self._prep_merge_tags(tags)

        for related in related_fields:
            # Get the instances of the related models which refer to the tag
            # instances being merged
            if django.VERSION < (1, 8):
                related_model = related.model
            else:
                related_model = related.related_model

            objs = related_model._base_manager.using(
                router.db_for_write(self.tag_model, instance=self)
            ).filter(
                **{"%s__in" % related.field.name: tags}
            )

            # Switch the tags
            # Referring via tagulous to avoid circular import

            if isinstance(related.field, tagulous.models.TagField):
                for obj in objs:
                    getattr(obj, related.field.name).remove(*tags)
                    getattr(obj, related.field.name).add(self)
    merge_tags.alters_data = True

    def _update_extra(self):
        """
        Called by .save() before super().save()
        Allows subclasses to update extra fields based on slug
        """
        pass

    def _save_direct(self, *args, **kwargs):
        """
        Save without modifying data
        Used during schemamigrations
        """
        # We inherited from BaseTagModel, tell that to save directly too
        return super(BaseTagModel, self).save(*args, **kwargs)

    def save(self, *args, **kwargs):
        """
        Automatically generate a unique slug, if one does not exist
        """
        # Based on django-taggit: don't worry about race conditions when
        # setting names and slugs, just avoid potential slugify clashes.
        # We could improve this if race conditions are ever a problem in the
        # real world, but until Django provides a reliable way to determine
        # the cause of an IntegrityError, we can never make this perfect.

        # If already in the database and has a slug set, just save as normal
        # Set slug to None to rebuild it
        if self.pk and self.slug:
            self._update_extra()
            return super(BaseTagModel, self).save(*args, **kwargs)

        # Slug the tag name. Run it through unicode_to_ascii because slugify will
        # cry if the label contains unicode characters
        label = self.name
        slug_max_length = self.__class__._meta.get_field('slug').max_length
        slug_base = slugify(six.text_type(utils.unicode_to_ascii(label)))
        self.slug = slug_base[:slug_max_length]
        self._update_extra()

        # Make sure we're using the same db at all times
        cls = self.__class__
        kwargs['using'] = kwargs.get('using') or router.db_for_write(
            cls, instance=self
        )

        # Try saving the slug - it'll probably be fine
        try:
            # If transaction supports atomic, we need to wrap the save call -
            # otherwise if save throws an exception it'll cause any current
            # queries to roll back
            with transaction_atomic():
                return super(BaseTagModel, self).save(*args, **kwargs)
        except IntegrityError:
            pass

        # Integrity error - something is probably not unique.
        # Assume it was the slug - make it unique by appending a number.
        # See which numbers have been used
        slug_base = slug_base[:slug_max_length - settings.SLUG_TRUNCATE_UNIQUE]
        try:
            last = cls.objects.filter(
                slug__regex="^%s_[0-9]+$" % slug_base
            ).latest('slug')
        except cls.DoesNotExist:
            # No numbered version of the slug exists
            number = 1
        else:
            slug_base, number = last.slug.rsplit('_', 1)
            number = int(number) + 1

        self.slug = '%s_%d' % (slug_base, number)
        self._update_extra()
        return super(BaseTagModel, self).save(*args, **kwargs)
    save.alters_data = True

    # For consistency with SingleTagField, provide .tag_model attribute
    tag_model = property(lambda self: self.__class__)


class FilterTagModel(BaseTagModel):
    """
    Abstract base class for tag models
    """
    name = models.CharField(
        unique=True, max_length=settings.NAME_MAX_LENGTH,
    )
    slug = models.SlugField(
        unique=False, max_length=settings.SLUG_MAX_LENGTH,
    )

    class Meta:
        ordering = ('name',)
        # Slug field must be unique, but manage it with unique_together
        # so that subclasses can override
        unique_together = (
            ('slug',)
        )


class SuperTagModel(BaseTagModel):
    """
    Abstract base class for tag models
    """
    name = models.CharField(
        unique=True, max_length=settings.NAME_MAX_LENGTH,
    )
    slug = models.SlugField(
        unique=False, max_length=settings.SLUG_MAX_LENGTH,
    )

    class Meta:
        ordering = ('name',)
        # Slug field must be unique, but manage it with unique_together
        # so that subclasses can override
        unique_together = (
            ('slug',)
        )


class GlobalTagRelation(models.Model):
    """
    global tag model - A joining table between TagModel(with slug) and Posts with no user affiliations.
    This table seems to have no use by the moment, but still save in our SQL Database, so that the data is there. 
    this is on the premise that supertags and tags will be passed 
    from the same form. 
    If want to separate, Just make it False
    """
    id = models.BigAutoField(primary_key=True, db_index=True)
    filter_tag = models.ForeignKey(FilterTagModel, null=True)
    super_tag = models.ForeignKey(SuperTagModel, null=True)
    post = models.ForeignKey('Post.GeneralPost', db_index=False)

    class Meta:
        # so that the post can be tagged only once
        unique_together = (
            ('filter_tag', 'super_tag', 'post'),
        )


class UserTagRelation(models.Model):
    """
    User tag model - A joining table between TagModel(with slug) Posts that has User Information.
    Thus, has a separate Managerclass.
    This is a manytomany, thus extending it to other model will require one of the following:
    Generic ForeignKey
    Another ForeignKey
    Abstract Layer
            Research on the performance issues and add later if needed

    Also, although the infor In the GlobalTagRelation
    """
    id = models.BigAutoField(primary_key=True, db_index=True)
    user = models.ForeignKey(User)
    filter_tag = models.ForeignKey(FilterTagModel, db_index=False, null=True)
    super_tag = models.ForeignKey(SuperTagModel, db_index=False, null=True)
    post = models.ForeignKey('Post.GeneralPost', db_index=False)

    class Meta:
        # so that the user's post can have only one tag
        unique_together = (
            ('filter_tag', 'super_tag', 'post'),
        )
