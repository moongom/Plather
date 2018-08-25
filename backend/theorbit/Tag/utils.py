"""
This Django app has been highly influenced by django tagulous
"""
from __future__ import unicode_literals
import re


from django.utils import six
from django.utils.encoding import force_text

import unicodedata
try:
    from unidecode import unidecode
except ImportError:  # pragma: no cover - tests simulate this
    unidecode = None

###############################################################################
# Tag name parse and render
###############################################################################


def parse_tags(tag_string, tag_max_count=10, supertag_max_count=5, is_supertag=False,
               sort_tag=False, tag_supertag_coexists=True):
    """
    parse tags for supertags(##), and tags(#) and it's use case
    varies. It can allow both, or do only one depending on the variable
    important! = returns a dictionary {'tag' : [...], 'supertag': [...]}
    """
    # Empty string easiest case
    if not tag_string:
        return []

    # Prep variables for the parser
    tags = {}

    # declare empty tags list
    tag = []
    supertag = []

    # prepare regex arguments
    # the followings find words that comes after only 1 or 2 hashes
    tag_finder = re.compile(r"(?<!#)[＃#]{1}(\w+)", re.UNICODE)
    supertag_finder = re.compile(r"(?<!#)[＃#]{2}(\w+)", re.UNICODE)

    if tag_supertag_coexists:
        tag = list(set(tag_finder.findall(tag_string)))
        supertag = list(set(supertag_finder.findall(tag_string)))
    else:
        if is_supertag:
            supertag = list(set(supertag_finder.findall(tag_string)))
        else:
            tag = list(set(tag_finder.findall(tag_string)))

    # sort it? Do we need this when we put it in the sql? delete if not needed
    if sort_tag:
        tags.update({'tag': tag.sort(), 'supertag': supertag.sort()})
    else:
        tags.update({'tag': tag, 'supertag': supertag})

    # Check the count
    for tag_key in tags:
        print('%s_max_count' % tag_key)
        if eval('%s_max_count' % tag_key) and len(tags[tag_key]) > eval('%s_max_count' % tag_key):
            raise ValueError('%s field can only have %s argument%s' % (
                tag_key, tag_key + max_count,
                '' if max_count == 1 else 's',
            ))

    return tags


def unicode_to_ascii(raw):
    if unidecode is not None:
        return six.text_type(unidecode(six.text_type(raw)))

    return ''.join(
        c if ord(c) < 128 else '_'
        for c in unicodedata.normalize('NFD', six.text_type(raw))
        if unicodedata.category(c) != 'Mn'
    )
########################################################
################
# TO DO!!!
################
######################################################


def render_tags(tags):
    """
    Creates a tag string from a list of Tag instances or strings, suitable for
    editing.
    Tag names which contain commas will be quoted, existing quotes will be
    escaped.
    """
    names = []
    for tag in tags:
        # This will catch a list of Tag objects or tag name strings
        name = six.text_type(tag)

        name = name.replace(QUOTE, DOUBLE_QUOTE)
        if COMMA in name or SPACE in name:
            names.append('"%s"' % name)
        else:
            names.append(name)
    return ', '.join(sorted(names))
