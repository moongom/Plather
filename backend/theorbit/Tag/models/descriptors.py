"""
code very loosely based on Tagulous. Inspired the usage of descriptors!
"""


from django.apps import apps
from django.utils import six
from django.db import models, transaction
from django.db.models import Q

# to find the TagOptions
from Tag import constants

transaction_atomic = transaction.atomic
tag_model = constants.OPTION_DEFAULTS.get('tag_model', None)
# try to do it as quoted

from Tag.models.models import FilterTagModel, SuperTagModel, GlobalTagRelation, UserTagRelation
"""
We get this from the Tag.models.models TagModel, but following the defaults in constants is better
Then, get the Tagoptions that is in the TagModel. It will then act as migrated. This is a TODO
"""


def tag_model_creator(create_tag_list=[], is_supertag=None):
    print('tag model creator tag_or_supertag')
    return_tag_add_pk_list = []
    if is_supertag:
        for tag_name in [tag_name for tag_name in (create_tag_list or [])]:
            # create and get tag id for newly made tags
            tag_model, created = SuperTagModel.objects.get_or_create(
                name=tag_name)
            # never bulk create, unless bulk_create action changes
            # it will nullify the customized save() of TagModel
            # this looks inefficient but seems the best for now
            if created:
                return_tag_add_pk_list.append(tag_model.id)

    else:
        for tag_name in [tag_name for tag_name in (create_tag_list or [])]:
            tag_model, created = FilterTagModel.objects.get_or_create(
                name=tag_name)
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
    return_tag_delete_pk_list = []
    tags_tracker_filters_for_delete = Q()

    print('tag model deleter tag_or_supertag')
    for tag_name in [tag_name for tag_name in (delete_tag_list or [])]:
        tags_tracker_filters_for_delete |= Q(name=tag_name)
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
    return_tag_delete_pk_list = []
    tags_tracker_filters_for_delete = Q()
    print('tag pk finder for tag relation delete')
    print(is_supertag)
    for tag_name in [tag_name for tag_name in (delete_tag_list or [])]:
        tags_tracker_filters_for_delete |= Q(name=tag_name)
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
    print('tag model relation creator tag_or_supertag')
    print(pk_tag_list_create)
    if is_supertag:
        if pk_tag_list_create != []:
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
        if pk_tag_list_create != []:
            print('is supertag')
            print(pk_tag_list_create)
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
    print('tag model relation deleter tag_or_supertag')
    print(is_supertag)
    print(pk_tag_list_delete)
    if is_supertag:
        if pk_tag_list_delete != []:
            print('pk_tag_list_delete was not empty!')
            tags_tracker_filters_for_delete = Q()
            for tag_id in pk_tag_list_delete:
                tags_tracker_filters_for_delete | Q(supertag_tag_id=tag_id)
            GlobalTagRelation.objects.filter(
                tags_tracker_filters_for_delete).delete()
            UserTagRelation.objects.filter(
                tags_tracker_filters_for_delete).delete()
    else:
        if pk_tag_list_delete != []:
            print('pk_tag_list_delete was not empty!')
            tags_tracker_filters_for_delete = Q()
            for tag_id in pk_tag_list_delete:
                tags_tracker_filters_for_delete | Q(filter_tag_id=tag_id)
            GlobalTagRelation.objects.filter(
                tags_tracker_filters_for_delete).delete()
            UserTagRelation.objects.filter(
                tags_tracker_filters_for_delete).delete()
    print('tag model relation deleter tag_or_supertag done')


def pk_tag_list_funct_combined(is_supertag, tag_list_to_add, tag_list_to_delete, user_id, post_id):
    if post_id:
        if is_supertag:
            pk_supertag_list_to_add = tag_model_creator(
                create_tag_list=tag_list_to_add, is_supertag=True)
            pk_supertag_list_to_delete = tag_pk_finder_for_tag_relation_delete(
                delete_tag_list=tag_list_to_delete, is_supertag=True)
            pk_tag_list_create_relation(
                pk_tag_list_create=pk_supertag_list_to_add, is_supertag=True, user_id=user_id, post_id=post_id)
            pk_tag_list_delete_relation(
                pk_tag_list_delete=pk_supertag_list_to_delete, is_supertag=True)
        else:
            pk_tag_list_to_add = tag_model_creator(
                create_tag_list=tag_list_to_add, is_supertag=False)
            pk_tag_list_to_delete = tag_pk_finder_for_tag_relation_delete(
                delete_tag_list=tag_list_to_delete, is_supertag=False)
            pk_tag_list_create_relation(
                pk_tag_list_create=pk_tag_list_to_add, is_supertag=False, user_id=user_id, post_id=post_id)
            pk_tag_list_delete_relation(
                pk_tag_list_delete=pk_tag_list_to_delete, is_supertag=False)
    else:
        if is_supertag:
            tag_model_creator(
                create_tag_list=tag_list_to_add, is_supertag=True)
        else:
            tag_model_creator(
                create_tag_list=tag_list_to_add, is_supertag=False)


def json_to_many_to_many(self, value, instance):
        # a json to many_to_many connector that deletes and adds
    with transaction_atomic():
        print('2.1')
        """
        we assume that the json is passed just the way we want
        therefore run the parse_tags on the validation!
        also this could be enhanced if we stored the id of the tag too
        but not at the moment. just the name
        """
        pk_tag_list_to_add = []
        pk_tag_list_to_delete = []
        pk_supertag_list_to_add = []
        pk_supertag_list_to_delete = []

        post_id = instance.id
        user_id = instance.user_id
        # we need to add the new tags, and delete the obsolete ones.
        for opt in ('tag', 'supertag'):
            print('2.2')
            print(opt)
            tag_list_to_add = []
            tag_list_to_delete = []
            # initialize lists to add and delete
            if value.get('%s' % opt):
                tags_in_value = value.get('%s' % opt)
            else:
                tags_in_value = []

            print('tags_in_value')
            print(tags_in_value)

            if instance.__dict__.get('tags_json') is not None:
                print(instance.__dict__.get('tags_json').get('%s' % opt))
                if instance.__dict__.get('tags_json').get('%s' % opt) is not None:
                    tags_in_instance = instance.__dict__.get(
                        'tags_json').get('%s' % opt)
                else:
                    continue
            else:
                tags_in_instance = []
            # set as empty list if none

            print('tags_in_instance')
            print(tags_in_instance)

            tag_list_to_add.extend(
                list(set(tags_in_value).difference(tags_in_instance)))

            tag_list_to_delete.extend(
                list(set(tags_in_instance).difference(tags_in_value)))
            # find differences of both lists to rule out unneeded visits
            # to the db you don't need to create anything if it was already
            # there!
            print('tag_list_to_add')
            print(tag_list_to_add)
            print('tag_list_to_delete')
            print(tag_list_to_delete)
            if opt == 'tag':
                # creates base filtertag model and returns pk to create
                # relationshps
                pk_tag_list_funct_combined(
                    is_supertag=False, post_id=post_id, user_id=user_id, tag_list_to_add=tag_list_to_add,
                    tag_list_to_delete=tag_list_to_delete)

            elif opt == 'supertag':
                pk_tag_list_funct_combined(
                    is_supertag=True, post_id=post_id,  user_id=user_id, tag_list_to_add=tag_list_to_add,
                    tag_list_to_delete=tag_list_to_delete)
            else:
                pass
        print(pk_tag_list_to_add)
        print(pk_tag_list_to_delete)
        print(pk_supertag_list_to_add)
        print(pk_supertag_list_to_delete)
    print('2.complete')
    return None


class JSONTagFieldDescriptor(object):

    def __init__(self, field_name, *args, **kwargs):
        self.field_name = field_name

    def __get__(self, instance=None, owner=None):
        return instance.__dict__[self.field_name]
        # if self.field_name in instance.__dict__:
        #     value = instance.__dict__[self.field_name]
        #     print('1 if yes')
        # elif self.field_name is None:
        #     return None
        # else:
        #     value = instance.refresh_from_db(fields=[self.field_name])
        #     print('2 if no')
        # return value

    def __set__(self, instance, value):
        print('1')
        print(value)
        print(instance.__dict__)
        if instance.__dict__.get('id') is None:
            print('1.1')
            # this means we are creating a new TagsJson Field
            if value == {}:
                print('1.1.1')
                # works
                # when there is nothing in the value, it means
                # we don't need to make any relations
                instance.__dict__[self.field_name] = value
            else:
                print('1.1.2')
                # !!not checked relation creation, but code runs
                # when there is values, then create relations
                json_to_many_to_many(self, value, instance)
                # then set the value
                instance.__dict__[self.field_name] = value
        else:
            # when there is an id, it means we are calling a value or
            # updating one
            print('1.2')
            if instance.__dict__.get(self.field_name):
                print('1.2.1')
                # !!not checked relation creation, but code runs
                # if there is a field name, it means there has been something stored
                # in the field
                json_to_many_to_many(self, value, instance)
                instance.__dict__[self.field_name] = value
            else:
                # there is no field name, it means that we previously stored
                # empty dict
                print('1.2.2')
                if value == {}:
                    print('1.2.3')
                    # works
                    # empty dict in field, and empty value to insert. Do
                    # nothing but, or also calling an empty tagJson instance
                    instance.__dict__[self.field_name] = value

                else:
                    print('1.2.4')
                    # empty dict in field, but there is something to insert
                    json_to_many_to_many(self, value, instance)
                    instance.__dict__[self.field_name] = value
