from django.apps import apps
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext
from django.db.models.signals import post_save

# for users
from django.conf import settings

User = settings.AUTH_USER_MODEL

# for tags
from Tag.models.fields import TagJSONFIELD


class GeneralPost(models.Model):

    #id
    id = models.BigAutoField(primary_key=True, db_index=True)

    #activityDate -> 무슨 의미지?
    activityDate = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True, blank=True)

    portfolioBrief = models.CharField(max_length=150, null=True, blank=True)
    portfolioContent = models.CharField(max_length=500000, null=True, blank=True)
    portfolioTitle = models.CharField(max_length=150, null=False)

    user = models.ForeignKey(User, db_index=True)
    did_date = models.DateTimeField(blank=True, db_index=False, null=True)

    subTag = models.CharField(max_length=150, null=True, blank=True)
    superTag = models.CharField(max_length=150, null=True, blank=True)



    # using an extended JSON Field, that saves in JSON for easy querying.
    # But parses through to check tag integrity, then also save it to the
    # TagBase Model and bridging table
    # this field should only exist here! Or else descriptor will break

    ## tag 부분은 우선 빼놓음... -> 건순!
    # tags_json = TagJSONFIELD(default=dict,
    #                          tag_models=['FILTERTAGMODEL'])

    # class Comment(models.Model):
    #     id = models.BigAutoField(primary_key=True, db_index=True)

    #     post = models.ForeignKey('Post', related_name="comment_posts", on_delete=models.CASCADE,
    #                                     db_index=True, null=True, blank=True)
    #     content = models.CharField(max_length=100)

    #     user = models.ForeignKey(User, on_delete=models.CASCADE, db_index=True)

    #     pub_date = models.DateTimeField(default=timezone.now)
    #     last_edit_date = models.DateTimeField(default=timezone.now)

    #     def __str__(self):
    # return "%s's Comment (Content: %.20s...) on %s" % (self.user,
    # self.content, self.post)

    #     class Meta:
    #         ordering = ['-pub_date']

    # def post_save_post_receiver(sender, instance, created, *args, **kwargs):
    #     #note that this if created is important so there is no infinite post_save signal action recursion
    #     if created:
    #         hash_regex = r'#(?P<hashtagslug>[\w\d-]+)'
    #         hashtags = re.findall(hash_regex, instance.content)
    #         parsed_hashtags.send(
    #         sender=instance.__class__,
    #         hashtag_list=hashtags,
    #         object_id=instance.id,
    #         )

    #         action.send(sender= Post, actor=instance.user, verb='posted', itself=instance)
    #         track(user=instance.user, instance=instance)

    # def post_save_review_receiver(sender, instance, created, *args, **kwargs):
    #     if created :
    #         # # notify a user
    #         # user_regex = r'@(?P<username>[\w.@+-]+)'
    #         # usernames = re.findall(user_regex, instance.content)
    #         # # send notification to user here.

    #         hash_regex = r'#(?P<hashtagslug>[\w\d-]+)'
    #         hashtags = re.findall(hash_regex, instance.content)
    #         parsed_hashtags.send(
    #             sender=instance.__class__,
    #             hashtag_list=hashtags,
    #             object_id=instance.id,
    #             )

    #         action.send(sender= Review, actor=instance.user, verb='reviewed on', target=instance.review_target,itself=instance)

    #         # send hashtag signal to user here.

    # def post_save_comment_receiver(sender, instance, created, *args, **kwargs):
    #     if created :
    #         # # notify a user
    #         # user_regex = r'@(?P<username>[\w.@+-]+)'
    #         # usernames = re.findall(user_regex, instance.content)
    #         # # send notification to user here.

    #         hash_regex = r'#(?P<hashtagslug>[\w\d-]+)'
    #         hashtags = re.findall(hash_regex, instance.content)
    #         parsed_hashtags.send(
    #             sender=instance.__class__,
    #             hashtag_list=hashtags,
    #             object_id=instance.id,
    #             )
    #         if instance.post:
    #             action.send(sender= Comment, actor=instance.user,
    #                 verb='commented on', target=instance.post, itself=instance)
    #         if instance.review:
    #             action.send(sender= Comment, actor=instance.user,
    #                 verb='commented on', target=instance.review, itself=instance)
    #         # send hashtag signal to user here.

    # post_save.connect(post_save_post_receiver, sender=Post)
    # post_save.connect(post_save_review_receiver, sender=Review)
    # post_save.connect(post_save_comment_receiver, sender=Comment)
    # # Create your models here.
