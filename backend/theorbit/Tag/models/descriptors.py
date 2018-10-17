"""
code very loosely based on Tagulous. Inspired the usage of descriptors!
"""
import json
import importlib


from django.apps import apps
from django.utils import six
from django.db import models, transaction
from django.db.models import Q

# to find the TagOptions
from Tag import constants

transaction_atomic = transaction.atomic
tag_model = constants.OPTION_DEFAULTS.get('tag_model', None)
# try to do it as quoted


"""
We get this from the Tag.models.models TagModel, but following the defaults in constants is better
Then, get the Tagoptions that is in the TagModel. It will then act as migrated. This is a TODO
"""

"""
Tag Relation is not being set when creating a new instance with a valid tags_json field
"""

"""
I know for sure that calling decsriptor classes require RAM spaces, but I am not sure
whether we need to free our RAM our not, since Python is good at freeing RAM spaces.
But in the descriptor documentation of python, we are encouraged to call variables with
weakkeydictionary(), which is supposed to free memory spaces

This is a thing to look into the future
"""

"""
be aware, the max number of Tags for a model, is only checked by the serializer,
letting it be checked on the saving level is something to be considered
"""


def tag_model_creator(create_tag_list=[], is_supertag=None):
    print('tag model creator runs')
    print('is supertag or not')
    print(is_supertag)
    print('tag list to create')
    return_tag_add_pk_list = []
    if is_supertag:
        for tag_name in [tag_name for tag_name in (create_tag_list or [])]:
            # create and get tag id for newly made tags
            tag_model, created = SuperTagModel.objects.get_or_create(
                name__iexact=tag_name)
            # never bulk create, unless bulk_create action changes
            # it will nullify the customized save() of TagModel
            # this looks inefficient but seems the best for now
            if created:
                return_tag_add_pk_list.append(tag_model.id)

    else:
        for tag_name in [tag_name for tag_name in (create_tag_list or [])]:
            tag_model, created = FilterTagModel.objects.get_or_create(
                name__iexact=tag_name)
            # never bulk create, unless bulk_create action changes
            # it will nullify the customized save() of TagModel
            # this looks inefficient but seems the best for now
            if created:
                return_tag_add_pk_list.append(tag_model.id)
    print('tag model creator tag_or_supertag done')
    return return_tag_add_pk_list


def tag_model_deleter(delete_tag_list=[], is_supertag=None):
    """
    Reminder!
    don't use this, don't delete already made TagModels. Just here if so we can use it if needed!
    """
    if delete_tag_list is []:
        return []
    return_tag_delete_pk_list = []
    tags_tracker_filters_for_delete = Q()

    print('tag model deleter is now really deleting')
    for tag_name in [tag_name for tag_name in (delete_tag_list or [])]:
        tags_tracker_filters_for_delete |= Q(name__iexact=tag_name)
    if is_supertag:
        qs = SuperTagModel.objects.filter(tags_tracker_filters_for_delete)
        print('qs_delete_supertag')
        print(qs)
        print(qs.values_list('id', flat=True))
        return_tag_delete_pk_list.append(list(qs.values_list('id', flat=True)))
        qs.delete()
    else:
        qs = FilterTagModel.objects.filter(tags_tracker_filters_for_delete)
        print('qs_delete_filtertag')
        print(qs)
        print(qs.values_list('id', flat=True))
        return_tag_delete_pk_list.append(list(qs.values_list('id', flat=True)))
        qs.delete()
    print('tag model deleter tag_or_supertag done')
    return return_tag_delete_pk_list


def tag_pk_finder_for_tag_relation_delete(delete_tag_list=[], is_supertag=None):

    print('tag pk finder for tag relation delete runs')
    print('is supertag')
    print(is_supertag)
    print('tag_list to delete')
    print(delete_tag_list)
    if not delete_tag_list:
        print('tag_list delete relations is empty!')
        return []

    return_tag_delete_pk_list = []
    tags_tracker_filters_for_delete = Q()

    for tag_name in [tag_name for tag_name in (delete_tag_list or [])]:
        tags_tracker_filters_for_delete |= Q(name__iexact=tag_name)
    print(str(tags_tracker_filters_for_delete))
    if is_supertag:
        qs = SuperTagModel.objects.filter(tags_tracker_filters_for_delete)
        print(str(qs))
        print(qs)
        return_tag_delete_pk_list.append(list(qs.values_list('id', flat=True)))
    else:
        qs = FilterTagModel.objects.filter(tags_tracker_filters_for_delete)
        print(str(qs))
        print(qs)
        return_tag_delete_pk_list.append(list(qs.values_list('id', flat=True)))
    print(return_tag_delete_pk_list)
    print('tag pk finder for tag relation delete done')
    return return_tag_delete_pk_list


def pk_tag_list_create_relation(pk_tag_list_create, is_supertag, user_id, post_id):
    print('tag model relation creator tag_or_supertag runs')
    print('is supertag or not')
    print(is_supertag)
    print('pk_tag list relation to create')
    print(pk_tag_list_create)
    if is_supertag:
        print('tag_list to create was not empty!')
        for tag_id in pk_tag_list_create:
            # later add bulk create
            obj, created = GlobalTagRelation.objects.get_or_create(
                post_id=post_id, super_tag_id=tag_id, filter_tag_id=None)
            if created:
                print(obj.id)
            obj, created = UserTagRelation.objects.get_or_create(
                user_id=user_id, post_id=post_id, super_tag_id=tag_id, filter_tag_id=None)
            if created:
                print(obj.id)
    else:
        print('tag_list to create was not empty!')
        for tag_id in pk_tag_list_create:
            # later add bulk create
            obj, created = GlobalTagRelation.objects.get_or_create(
                post_id=post_id, super_tag_id=None, filter_tag_id=tag_id)
            if created:
                print(obj.id)
            obj, created = UserTagRelation.objects.get_or_create(
                user_id=user_id, post_id=post_id, super_tag_id=None, filter_tag_id=tag_id)
            if created:
                print(obj.id)
    print('tag model relation creator tag_or_supertag done')


def pk_tag_list_delete_relation(pk_tag_list_delete, is_supertag):
    print('tag model relation deleter tag_or_supertag runs')
    print('is supertag or not')
    print(is_supertag)
    print('pk_tag list delete relation list')
    print(pk_tag_list_delete)
    if not pk_tag_list_delete:
        return None
    else:
        if is_supertag:
            print('pk_tag_list_delete was not empty!')
            tags_tracker_filters_for_delete = Q()
            for tag_id in pk_tag_list_delete:
                tags_tracker_filters_for_delete | Q(supertag_tag_id=tag_id)
            GlobalTagRelation.objects.filter(
                tags_tracker_filters_for_delete).delete()
            UserTagRelation.objects.filter(
                tags_tracker_filters_for_delete).delete()
        else:
            print('pk_tag_list_delete was not empty!')
            tags_tracker_filters_for_delete = Q()
            for tag_id in pk_tag_list_delete:
                tags_tracker_filters_for_delete | Q(filter_tag_id=tag_id)
            GlobalTagRelation.objects.filter(
                tags_tracker_filters_for_delete).delete()
            UserTagRelation.objects.filter(
                tags_tracker_filters_for_delete).delete()
    print('tag model relation deleter tag_or_supertag done')
    return None


def pk_tag_list_funct_combined(is_supertag, tag_list_to_add, tag_list_to_delete, user_id, post_id):
    print('pk_tag_list_funct_starts')
    print('is supertag')
    print(is_supertag)
    print('add list')
    print(tag_list_to_add)
    print('delete list')
    print(tag_list_to_delete)
    print('post_id')
    print(post_id)
    print('-------- if post_id --------- runs')
    if post_id:
        print('yes post id')
        if tag_list_to_add:
            print('tag_list_to_add_is_not_none!')
            pk_supertag_list_to_add = tag_model_creator(
                create_tag_list=tag_list_to_add, is_supertag=is_supertag)
            pk_tag_list_create_relation(
                pk_tag_list_create=pk_supertag_list_to_add, is_supertag=is_supertag, user_id=user_id, post_id=post_id)

        if tag_list_to_delete:
            print('tag_list_to_delete_is_not_none!')
            pk_supertag_list_to_delete = tag_pk_finder_for_tag_relation_delete(
                delete_tag_list=tag_list_to_delete, is_supertag=is_supertag)
            pk_tag_list_delete_relation(
                pk_tag_list_delete=pk_supertag_list_to_delete, is_supertag=is_supertag)
    else:
        """
        Must Fix This
        this is a problem, when creating a post with tags_json, it will come here, creating no relations
        For it!!!!
        Problem
        Problem
        """
        if tag_list_to_add:
            pk_supertag_list_to_create = tag_model_creator(
                create_tag_list=tag_list_to_add, is_supertag=is_supertag)
        if tag_list_to_delete:
            pk_supertag_list_to_create = tag_model_creator(
                create_tag_list=tag_list_to_add, is_supertag=is_supertag)


def tags_to_many_to_many(self, all_tags, instance):
        # a json to many_to_many connector that deletes and adds
    with transaction_atomic():
        print('tags_to_many_to_many initialized')
        print('2.1')
        """
        we assume that the json is passed just the way we want
        therefore run the parse_tags on the validation!
        also this could be enhanced if we stored the id of the tag too
        but not at the moment. just the name
        """

        post_id = instance.id
        user_id = instance.user_id

        if not all_tags:
            return None
        # do nothing if we recieved nothing! this is a safeguard, we do this
        # logic at the __set__ level!

        # first add the tag_models and relations, then the supertags!
        for opt in ('tag', 'supertag'):
            to_add = all_tags.pop('%s_list_to_add' % opt)
            to_del = all_tags.pop('%s_list_to_delete' % opt)

            if to_add or to_del:
                if opt == 'tag':
                    pk_tag_list_funct_combined(
                        is_supertag=False, post_id=post_id, user_id=user_id, tag_list_to_add=to_add,
                        tag_list_to_delete=to_del)
                else:
                    pk_tag_list_funct_combined(
                        is_supertag=True, post_id=post_id, user_id=user_id, tag_list_to_add=to_add,
                        tag_list_to_delete=to_del)


def tags_to_delete_or_create_finder(self, value, instance):
    """
    this function exists to find tags and supertags that must be added or deleted
    this functions returns either none or a list for all cases (tags, supertags, add and delete, thus 4 lists)
    this function's pupose is to initially find out whether we need to call the tags_to_many_to_many which has
    "with_transactions_atomic" which increases the probability to break or overload our memory that runs the
    descriptor class
    """
    if type(value) is not dict:
        json.loads(value)
    else:
        pass
    # load it to json and make it a dict
    # don't know why but recieves as a string probably due to serializer

    tag_list_to_add = []
    tag_list_to_delete = []
    supertag_list_to_add = []
    supertag_list_to_delete = []
    all_tags = {}

    for opt in ('tag', 'supertag'):
        list_to_add = []
        list_to_delete = []
        # initialize lists to add and delete
        if value.get('%s' % opt):
            tags_in_value = value.get('%s' % opt)
        else:
            tags_in_value = []

        if instance.__dict__.get('tags_json') is not None:
            # comes here if the instance has a tags_json field when first loaded by the
            # descriptor
            print('the instance had a tag_json field when descriptor loaded it')
            print(instance.__dict__.get('tags_json'))
            if instance.__dict__.get('tags_json').get('%s' % opt) is not None:
                print('the tags_json field had a tag, or supertag section')
                print(instance.__dict__.get('tags_json').get('%s' % opt))
                tags_in_instance = instance.__dict__.get(
                    'tags_json').get('%s' % opt)
            else:
                # comes here if there is a tags_json field, but there is no specific value
                # this can happen when there is no supertag but there is a tag, or vice versa
                # this is not expected to run when there are no values,
                # nonetheless may run
                print('there was no tags in the tags json field')
                tags_in_instance = []
        else:
            # this is supposed to run when there is no tags_json field in the instance when
            # loaded by the descriptor
            print('set tags in instance as []')
            tags_in_instance = []
            # set as empty list if none

        list_to_add.extend(
            list(set(tags_in_value).difference(tags_in_instance)))

        list_to_delete.extend(
            list(set(tags_in_instance).difference(tags_in_value)))

        if opt == 'tag':
            # creates base filtertag model and returns pk to create
            # relationshps
            tag_list_to_add.extend(list_to_add)
            tag_list_to_delete.extend(list_to_delete)

        elif opt == 'supertag':
            supertag_list_to_add.extend(list_to_add)
            supertag_list_to_delete.extend(list_to_delete)

        else:
            raise ValueError(
                'your dict has %s, but should be either "tag" or "supertag"' % opt)

        if not tag_list_to_add and tag_list_to_delete and supertag_list_to_add and supertag_list_to_delete:
            return None

    all_tags.update({'tag_list_to_add': tag_list_to_add,
                     'tag_list_to_delete': tag_list_to_delete,
                     'supertag_list_to_add': supertag_list_to_add,
                     'supertag_list_to_delete': supertag_list_to_delete})
    return all_tags


class JSONTagFieldDescriptor(object):

    def __init__(self, field_name, *args, **kwargs):
        self.field_name = field_name

        print('___%s start_____' % self)
        print(self)
        print(self.__dict__)
        print('%s_____dfadasf' % field_name)
        print(self.field_name.options)
        print(self.field_name.tag_models)
        tag_options = self.field_name.options

        tag_model_class = list()
        tag_rel_class = list()

        print(type(self.field_name.options))

        for opt in self.field_name.options:

            cls_path_name, tag_rel = map(
                list(opt.values())[0].__getitem__, ('path_name', 'tag_rel'))

            cls_path, cls_name = cls_path_name[0].rsplit(".", 1)

            tag_model_class.append(
                getattr(importlib.import_module(cls_path), cls_name))

            for tag_rel_path_name in tag_rel:
                cls_path, cls_name = tag_rel_path_name.rsplit(".", 1)
                tag_rel_class.append(
                    getattr(importlib.import_module(cls_path), cls_name))

        print(tag_rel_class)
        print(tag_model_class)
        print(self.field_name.tag_models)
        print('_______descriptor init ends')

    def __get__(self, instance, value):

        print('__get__ runs')
        print(instance.__dict__)
        # print(self.field.tag_options())

        return instance.__dict__[self.field_name]
        # if self.field_name in instance.__dict__:
        #     value = instance.__dict__[self.field_name]
        #     print('1 if yes')
        # elif self.field_name is None:
        #     return None
        # else:
        #     return value
        # return value

    def __set__(self, instance, value):
        print('1')
        print(value)
        print(instance.__dict__)
        # why not make a count checker here????
        all_tags = tags_to_delete_or_create_finder(self, value, instance)

        if not instance.__dict__.get('id'):
            print('1.1')
            # this means we are creating a new TagsJson Field
            # or creating a new instance of generalpost
            if not value:
                print('1.1.1')
                # creating with nothing!
                # when there is nothing in the value, it means
                # we don't need to make any relations not create any tag models
                instance.__dict__[self.field_name] = value
            else:
                print('1.1.2')
                # currently this part has problems
                # there is no post_id therefore no way to set relations
                # while there are relations to be made
                instance.__dict__[self.field_name] = value

        else:
            # when there is an id, it means we are calling a value or updating
            print('1.2')
            print('print instance.__dict__.get(self.field_name)')
            print(instance.__dict__.get(self.field_name))
            if instance.__dict__.get(self.field_name):
                print('1.2.1')
                # this runs when there we are updating an instance with a
                # tagsfield, does not check whether the dict is same or not.
                tags_to_many_to_many(self, all_tags, instance)
                instance.__dict__[self.field_name] = value

            else:
                print('1.2.2')
                if type(value) is dict:
                    # this should be called when getting any generalpost instance, since
                    # even with an instance without no tags, it will still have
                    # default = {}
                    # this also runs when updating a instance with tags_json =
                    # {}
                    # TODO: Create a if so that we don't run
                    # tags_to_many_to_many function if we are just getting
                    # things

                    print('1.2.3')
                    tags_to_many_to_many(self, all_tags, instance)
                    instance.__dict__[self.field_name] = value

                else:
                    print(
                        '1.2.4, this should technically never be called, if called please look into it')
                    # this should be never called, just here for safety reasons
                    tags_to_many_to_many(self, all_tags, instance)
                    instance.__dict__[self.field_name] = value
