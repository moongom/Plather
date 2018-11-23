
"""
Tagulous model field managers
These are accessed via the descriptors, and do the work of storing and loading
the tags.
For tag model manager, look in tagulous.models.models
"""

import django
from django.core import exceptions
from django.utils import six
from django.utils.encoding import python_2_unicode_compatible

from tagulous.utils import parse_tags, render_tags


@python_2_unicode_compatible
class BaseTagRelatedManager(object):
    """
    Mixin for TagRelatedManagerMixin, and base class for FakeTagRelatedManager.
    Provides methods to managed cached tags
    """

    def init_tagulous(self, descriptor):
        """
        Called directly after the mixin is added to the instantiated manager
        """
        self.tag_model = descriptor.tag_model
        self.tag_options = descriptor.tag_options

        # Maintain an internal set of tags, and track whether they've changed
        # If internal tags are None, haven't been loaded yet
        self.changed = False
        self.tags = None
        self.reload()

    def __str__(self):
        """
        If called on an instance, return the tag string
        """
        return self.get_tag_string()

    def __contains__(self, item):
        item_str = six.text_type(item)
        if self.tag_options.force_lowercase:
            item_str = item_str.lower()

        if self.tag_options.case_sensitive:
            return item_str in [tag.name for tag in self.tags]
        return item_str in [tag.name.lower() for tag in self.tags]

    def __eq__(self, other):
        """
        Compare a tag string or iterable of tags to the tags on this manager
        """
        # If not case sensitive, or lowercase forced, compare on lowercase
        lower = False
        if self.tag_options.force_lowercase or not self.tag_options.case_sensitive:
            lower = True

        # Prep other argument we're comparing against
        if isinstance(other, BaseTagRelatedManager):
            other = other.tags
        if isinstance(other, six.string_types):
            other_str = six.text_type(other)

            # Enforce case non-sensitivity or lowercase
            if lower:
                other_str = other_str.lower()

            # Parse other_str into list of tags
            other_tags = parse_tags(
                other_str, space_delimiter=self.tag_options.space_delimiter,
            )

        else:
            # Assume it's an iterable
            other_tags = other
            if lower:
                other_tags = [six.text_type(tag).lower() for tag in other]

        # Get list of set tags
        self_tags = self.get_tag_list()

        # Compare tag count
        if len(other_tags) != len(self_tags):
            return False

        # Compare tags
        for tag in self_tags:
            # If lowercase or not case sensitive, lower for comparison
            if lower:
                tag = tag.lower()

            # Check tag in other tags
            if tag not in other_tags:
                return False

        # Same number of tags, and all self tags present in other tags
        # It's a match
        return True

    def __ne__(self, other):
        """
        Compare tags, using opposite of __eq__
        """
        return not self.__eq__(other)

    def load_from_tagmanager(self, manager):
        """
        Copy status and cache from the specified manager
        """
        self.changed = manager.changed
        self.tags = manager.tags

    #
    # Functions for getting and setting tag cache
    #

    def get_tag_string(self):
        """
        Get the tag edit string for this instance as a string
        """
        return render_tags(self.tags)

    def get_tag_list(self):
        """
        Get the tag names for this instance as a list of tag names
        """
        return [tag.name for tag in self.tags]

    def set_tag_string(self, tag_string):
        """
        Sets the tags for this instance, given a tag edit string
        """
        # Get all tag names
        tag_names = parse_tags(
            tag_string, space_delimiter=self.tag_options.space_delimiter,
        )

        # Pass on to set_tag_list
        return self.set_tag_list(tag_names)
    set_tag_string.alters_data = True

    def set_tag_list(self, tag_names):
        """
        Sets the tags for this instance, given a list of tag names, or a list
        or queryset of tags
        """
        if self.tag_options.max_count and len(tag_names) > self.tag_options.max_count:
            raise ValueError(
                "Cannot set more than %d tags on this field" %
                self.tag_options.max_count
            )

        # Force tag_names to strings, in case it's a list of tags or a queryset
        tag_names = [six.text_type(tag_name) for tag_name in tag_names]

        # Apply force_lowercase
        if self.tag_options.force_lowercase:
            # Will be lowercase for later comparison
            tag_names = [name.lower() for name in tag_names]

        # Prep tag lookup
        # old_tags      = { cmp_name: tag }
        # cmp_new_names = { cmp_name: cased_name }
        if self.tag_options.case_sensitive:
            old_tags = dict(
                [(tag.name, tag) for tag in self.tags]
            )
            cmp_new_names = dict([(n, n) for n in tag_names])
        else:
            # Not case sensitive - need to compare on lowercase
            old_tags = dict(
                [(tag.name.lower(), tag) for tag in self.tags]
            )
            cmp_new_names = dict(
                [(name.lower(), name) for name in tag_names]
            )

        # See which tags are staying
        new_tags = []
        for cmp_old_name, old_tag in old_tags.items():
            if cmp_old_name in cmp_new_names:
                # Exists - add to new tags
                new_tags.append(old_tag)
                del cmp_new_names[cmp_old_name]
            else:
                # Tag will be removed
                self.changed = True

        # Only left with tag names which aren't present
        for tag_name in cmp_new_names.values():
            # Find or create all new tags
            try:
                if self.tag_options.case_sensitive:
                    tag = self.tag_model.objects.get(name=tag_name)
                else:
                    tag = self.tag_model.objects.get(name__iexact=tag_name)
            except self.tag_model.DoesNotExist:
                # Don't create it until it's saved
                tag = self.tag_model(name=tag_name, protected=False)

            # Add the tag
            new_tags.append(tag)
            self.changed = True

        # Store in internal tag cache
        self.tags = new_tags
    set_tag_list.alters_data = True


class FakeTagRelatedManager(BaseTagRelatedManager):
    """
    Fake manager class to manage cached tags, but provide no database access.
    For use with an unsaved model instance
    """
    _needs_db = '"%r" needs to be saved before TagField can use the database'

    def __init__(self, descriptor, instance, instance_type):
        self.instance = instance
        self.model = instance.__class__
        self.init_tagulous(descriptor)

    def reload(self):
        """
        Instance does not exist in the database, so should wipe the tags
        """
        self.tags = []
        self.changed = False

    def save(self, force=False):
        raise ValueError(self._needs_db % self.instance)

    def set(self, *args):
        raise ValueError(self._needs_db % self.instance)

    def add(self, *args):
        raise ValueError(self._needs_db % self.instance)

    def remove(self, *args):
        raise ValueError(self._needs_db % self.instance)

    def clear(self):
        raise ValueError(self._needs_db % self.instance)


class TagRelatedManagerMixin(BaseTagRelatedManager):
    """
    Mixin for RelatedManager to add tag functions
    Added to the normal m2m RelatedManager, after it has been instantiated.
    This holds in-memory changes of the TagField before committing them to the
    database on the post-save signal.
    """

    def reload(self):
        """
        Get the actual tags
        """
        # Convert to a list to force it to load now, and so we can change it
        self.tags = list(self.all())
        self.changed = False
    reload.alters_data = True

    def save(self, force=False):
        """
        Set the actual tags to the internal tag state
        If force is True, save whether we think it has changed or not
        """
        if not self.changed and not force:
            return

        # Add and remove tags as necessary
        new_tags = self._ensure_tags_in_db(self.tags)
        self.reload()

        # Add new tags
        for new_tag in new_tags:
            if new_tag not in self.tags:
                self.add(new_tag, _enforce_max_count=False)

        # Remove old tags
        for old_tag in self.tags:
            if old_tag not in new_tags:
                self.remove(old_tag)
        self.tags = new_tags
        self.changed = False
    save.alters_data = True

    def _ensure_tags_in_db(self, tags):
        """
        Ensure that self.tags all exist in the database
        """
        db_tags = []
        for tag in tags:
            if tag.pk:
                # Already in DB
                db_tag = tag
            else:
                # Not in DB - get or create
                field_lookup = 'name'
                if not self.tag_options.case_sensitive:
                    field_lookup += '__iexact'
                db_tag, __ = self.tag_model.objects.get_or_create(
                    defaults={'name': tag.name, 'protected': False},
                    **{field_lookup: tag.name}
                )
            db_tags.append(db_tag)
        return db_tags

    #
    # New set, add, remove and clear, to update tag counts
    #
    def set(self, *objs):
        self.clear()
        self.add(*objs)

    def add(self, *objs, **kwargs):
        """
        Add a list of tags or tag strings
        Takes on internal argument, _enforce_max_count - don't use in your code
        """
        enforce_max_count = kwargs.pop('_enforce_max_count', True)
        if kwargs:
            raise TypeError("add() got an unexpected keyword argument")

        # Convert strings to tag objects
        new_tags = []
        for tag in objs:
            if isinstance(tag, six.string_types):
                new_tags.append(self.tag_model(name=tag))
            else:
                new_tags.append(tag)

        # Don't trust the internal tag cache
        self.reload()

        # Reduce tags to ones not already loaded
        new_tags = [
            tag for tag in new_tags
            if tag not in self.tags
        ]

        # Enforce max_count
        if enforce_max_count and self.tag_options.max_count:
            current_count = len(self.tags)
            if current_count + len(new_tags) > self.tag_options.max_count:
                raise ValueError(
                    "Cannot set more than %s tags on this field; it already has %s" % (
                        self.tag_options.max_count, current_count,
                    )
                )

        # Ensure tags exist
        new_tags = self._ensure_tags_in_db(new_tags)

        # Add to db, add to cache, and increment
        super(TagRelatedManagerMixin, self).add(*new_tags)
        for tag in new_tags:
            self.tags.append(tag)
            tag.increment()
    add.alters_data = True

    def remove(self, *objs):
        # Convert strings to tag objects - if object doesn't exist, skip
        rm_tags = []
        for tag in objs:
            if isinstance(tag, six.string_types):
                try:
                    rm_tags.append(self.tag_model.objects.get(name=tag))
                except self.tag_model.DoesNotExist:
                    continue
            else:
                rm_tags.append(tag)

        # Don't trust the internal tag cache
        self.reload()

        # Cut tags back to only ones already set
        rm_tags = [
            tag for tag in self.tags if tag in rm_tags
        ]

        # Remove from cache
        self.tags = [tag for tag in self.tags if tag not in rm_tags]

        # Remove from db and decrement
        super(TagRelatedManagerMixin, self).remove(
            *self._ensure_tags_in_db(rm_tags)
        )
        for tag in rm_tags:
            tag.decrement()
    remove.alters_data = True

    def clear(self):
        # Don't trust the internal tag cache
        self.reload()

        # Clear db, then decrement and empty cache
        super(TagRelatedManagerMixin, self).clear()
        for tag in self.tags:
            tag.decrement()
        self.tags = []
    clear.alters_data = True