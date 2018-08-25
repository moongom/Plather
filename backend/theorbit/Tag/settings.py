"""
This Django app has been highly influenced by django tagulous
"""

from django.conf import settings
from django.utils import six


#
# Database control settings
#

NAME_MAX_LENGTH = getattr(settings, 'TAG_NAME_MAX_LENGTH', 255)
SLUG_MAX_LENGTH = getattr(settings, 'TAG_SLUG_MAX_LENGTH', 50)
LABEL_MAX_LENGTH = getattr(
    settings, 'TAG_LABEL_MAX_LENGTH', NAME_MAX_LENGTH,
)

# Number of characters to allow for finding a unique slug, ie if set to 5, the
# slug will be truncated by up to 5 characters to allow for a suffix of _9999
SLUG_TRUNCATE_UNIQUE = getattr(settings, 'TAG_TRUNCATE_UNIQUE', 5)


ENHANCE_MODELS = getattr(settings, 'TAG_ENHANCE_MODELS', True)
