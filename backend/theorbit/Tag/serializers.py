import json
import re

from rest_framework import serializers

from Tag.constants import OPTION_DEFAULTS


class TagJsonFieldSerializer(serializers.BaseSerializer):

    def to_internal_value(self, data):
        # parse tags for supertags(##), and tags(#) and it's use case
        # varies. It can allow both, or do only one depending on the variable
        # important! = returns a dictionary {'tag' : [...], 'supertag': [...]}
        # Makes this start throwing more errors!

        # tag_max_count = OPTION_DEFAULTS.get(tag_max_count)
        # supertag_max_count = OPTION_DEFAULTS.get(supertag_max_count)
        # tag_supertag_coexits = OPTION_DEFAULTS.get(tag_supertag_coexits)

        tag_max_count = 10
        supertag_max_count = 5
        tag_supertag_coexits = True

        # Empty string easiest case
        if not data:
            return dict
        else:
            print('some string through tag parser')
            tag_string = data
            print(tag_string)
            # Prep variables for the parser
            tags = {}

            # declare empty tags list
            tag = []
            supertag = []

            # prepare regex arguments
            # the followings find words that comes after only 1 or 2 hashes
            tag_finder = re.compile(r"(?<!#)[＃#]{1}(\w+)", re.UNICODE)
            supertag_finder = re.compile(r"(?<!#)[＃#]{2}(\w+)", re.UNICODE)

            if supertag_tag_coexist:
                tag = list(set(tag_finder.findall(tag_string)))
                supertag = list(set(supertag_finder.findall(tag_string)))
            else:
                if is_supertag:
                    supertag = list(set(supertag_finder.findall(tag_string)))
                else:
                    tag = list(set(tag_finder.findall(tag_string)))

            # sort it? Do we need this when we put it in the sql? delete if not
            # needed
            # sort it like this because sort() returns none
            tag.sort()
            supertag.sort()

            tags.update({'tag': tag, 'supertag': supertag})

            # Check the count
            for tag_key in tags:
                print(type(tags))
                print(tags)
                print(tags[tag_key])
                if eval('%s_max_count' % tag_key) and len(tags[tag_key]) > eval('%s_max_count' % tag_key):
                    raise serializzers.ValidationError('%s field can only have %s argument%s' % (
                        tag_key, tag_key + max_count, '' if max_count == 1 else 's',))
            tags = json.dumps(tags)
            print(tags)
            return tags

    def to_representation(self, instance):
        """
        rendering tags, dont use string concatenation.
        join is few hundred times faster
        """
        instance = json.loads(instance)
        print('to representation')
        if not instance:
            print('empty dict')
            return ''
        else:
            filter_tag_string = '#'
            super_tag_string = '##'
            # make sure instance is not string
            for opt in ('tag', 'supertag'):
                if opt is 'tag':
                    filter_tag_string = ''.join(
                        [filter_tag_string, ' #'.join(instance.get(opt))])
                else:
                    super_tag_string = ''.join(
                        [super_tag_string, ' ##'.join(instance.get(opt))])
        return ' '.join([filter_tag_string, super_tag_string])
