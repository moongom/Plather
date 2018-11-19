"""
benchmarked tagulous but ended up somewhat differently
Created a JSON FIELD for tags that also is connected with the manytomany bridging table
"""
from django.contrib.postgres.fields.jsonb import JSONField
from django.utils.translation import ugettext_lazy as _
from django.apps import apps


from Tag.models.descriptors import JSONTagFieldDescriptor

from Tag import constants
from Tag.models.options import TagOptions


"""
Note that if we set a process_multiple_tags as True,
then only_tag_model must have two or more models.
Or else, it will throw an attribute error and vice versa

This is intended to add flexibility to our filtertag, supertag field and model,
so that we can alter our front end by our desired means
"""


class BaseGenericTagField(object):
    """
    a generic tag field mixin
    created since class inheritance method in python dissallows
    adding new variables on __init__ which does not exist on the
    inheriting class
    """

    def __init__(self, tag_models=[], more_than_one_model=False, init_options={}, verbose_name=None, **kwargs):
        """
        only_to exists when we set the filtertag_supertag_coexists to false
        this will manually connect the field with the desired supertag or filtertag model
        """
        options = list()
        print('_____%s __ init____ BaseGenericTagField' % self)
        print(tag_models)
        print(type(tag_models[0]))
        print(init_options)
        """
        declare empty options dict. This will be filled in the following order
        kwargs in the field -> TagOptions of the base tag class.
        kwargs in the field has priority so fields may have different use
        cases
        """

        if not tag_models or not isinstance(tag_models, list):
            print('if not _tag_models')
            print(tag_models)
            raise AttributeError(
                "Tag model must be passed on as list when a field is created!")

        if len(tag_models) == 1:
            self.more_than_one_model = True

        print(tag_models)

        for name in tag_models:
            # for some reason on the migration stage, the 'tag.models.models' is stripped.
            # this monkey patch might break things, but lets leave it like this
            # for now

            option_from_constants = getattr(
                constants, ''.join([name, '_SETTINGS']), None)
            if not option_from_constants:
                raise AttributeError(
                    "add options for %s in constants.py")
            options.append(
                {name: option_from_constants})

        self.tag_models = tag_models
        self.options = options
        options = None
        # print(self.verbose_name)
        print(self.tag_models)
        print('_____%s __ ending   init____ BaseGenericTagField' % self)
        super(BaseGenericTagField, self).__init__(tag_models,
                                                  more_than_one_model, init_options, **kwargs)

        print('after super of basegeneric init')
        print(self.tag_models)
        print(tag_models)

    def contribute_to_class(self, cls, name):
        super(BaseGenericTagField, self).contribute_to_class(cls, name)
        print('%s contribute_to_class running' % name)
        print(self.remote_field)
        print(self.tag_models)
        print(cls)

    def deconstruct(self):
        name, path, args, kwargs = super(
            BaseGenericTagField, self).deconstruct()

        if self.tag_models:
            kwargs['tag_models'] = self.tag_models

        if self.more_than_one_model:
            kwargs['more_than_one_model'] = True

        if self.options:
            kwargs['init_options'] = self.options

        # these should never return False. But here for safety reassons
        print("___deconstruct running ____ %s" % self)
        print(type(self.tag_models))
        print(self.tag_models)
        # print(self.tag_model.model)
        print('verbose_name')
        print(self.verbose_name)

        return name, path, args, kwargs


class GenericJSONField(JSONField):

    def __init__(self, tag_models=[], more_than_one_model=False, init_options=None, options=None, verbose_name=None, **kwargs):
        super(GenericJSONField, self).__init__(**kwargs)

    def deconstruct(self):
        name, path, args, kwargs = super(GenericJSONField, self).deconstruct()

        return name, path, args, kwargs


class TagJSONFIELD(BaseGenericTagField, GenericJSONField):

    description = _('A JSONFIELD that connects to the tag manytomany model')
    default_error_messages = {
        'invalid': _("Value must be valid JSON and strictly follow the TagJSON syntax"),
    }

    def __init__(self, **kwargs):
        """
        to_user will be the UserTagModel which stores user and tag relations
        to_global will be the GlobalTagModel which store only tag relations
        """
        super(TagJSONFIELD, self).__init__(**kwargs)
        print('_____%s __ init____ TagJsonField' % self)

    def contribute_to_class(self, cls, name):
        super(TagJSONFIELD, self).contribute_to_class(cls, name)
        print('contribute to class running %s' % self)
        print(self.tag_models)
        print('cls and name below')
        print(cls, name)
        # new_descriptor = JSONTagFieldDescriptor(old_descriptor)
        setattr(cls, name, JSONTagFieldDescriptor(self))
        print('after setattr of contribute')
        print(self.tag_models)

    def deconstruct(self):
        print("____ deconstruct of %s _____TagsJsonField" % self)
        name, path, args, kwargs = super(TagJSONFIELD, self).deconstruct()

        print(self.tag_models)
        return name, path, args, kwargs
