"""
benchmarked tagulous but ended up very different
Created a JSON FIELD for tags that also is connected with the manytomany bridging table
"""
from django.contrib.postgres.fields import JSONField
from django.utils.translation import ugettext_lazy as _

from Tag.models.descriptors import JSONTagFieldDescriptor
from Tag.models.models import FilterTagModel, SuperTagModel, GlobalTagRelation, UserTagRelation

from Tag import constants
from Tag.models.options import TagOptions


class TagJSONFIELD(JSONField):

    description = _('A JSONFIELD that connects to the tag manytomany')
    default_error_messages = {
        'invalid': _("Value must be valid JSON and strictly follow the TagJSON syntax"),
    }

    def __init__(self, **kwargs):
        """
        to_user will be the UserTagModel which stores user and tag relations
        to_global will be the GlobalTagModel which store only tag relations
        """
        super(TagJSONFIELD, self).__init__(**kwargs)

    def contribute_to_class(self, cls, name):
        super(TagJSONFIELD, self).contribute_to_class(cls, name)
        setattr(cls, self.name, JSONTagFieldDescriptor(self.name))
