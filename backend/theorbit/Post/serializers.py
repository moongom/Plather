import json
from django.utils import timezone

from rest_framework import serializers

from Post.models import GeneralPost
from Account.serializers import PublicUserSerializer
from Tag.serializers import TagJsonFieldSerializer


# class JsonTagFieldSerisalizer(serializers.Serializer):
#     tags_json = serializers.CharField(max_length=10000)

#     parser_classes = (JsonTagFieldParser,)

#     def validate_tags_json(self, value):
#         """
#         this makes string into tag json field, no validation yet.
#         Just return
#         """
#         if json.loads(value):
#             return value
#         raise serializers.ValidationError(
#             "This is not proper json!! Give Json value")


# for posting
class GeneralPostserializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=150)
    content = serializers.CharField(max_length=500000)
    tags_json = TagJsonFieldSerializer()

    class Meta:
        model = GeneralPost
        fields = ('title', 'content', 'did_date',
                  'tags_json', )
        read_only_fields = ('pub_date', 'last_edit_date')
