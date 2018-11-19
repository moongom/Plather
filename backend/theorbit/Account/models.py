from django.db import models

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

from django.dispatch import receiver
from django.db.models.signals import post_save, pre_save
from .validators import unique_slug_generator

from django.db.models import Q

# below are for generic relationships
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation

# for StarRating
# from Activity.models import BaseStarRating

# #for signals
# from NewsFeed.signals import action
# from Activity.signals import basestarcreate
# from django.db.models.signals import post_save

# for managers
from .managers import UserManager


from django.utils.translation import ugettext_lazy as _


class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address', max_length=255, unique=True, db_index=True)

    USER_TYPES = (
        (1, 'Normal User'),
        (2, 'Staff with no delete Authority'),
        (3, 'Staff with Authority up to Post delete'),
        (4, 'Staff with Authority up to User delete'),
        (5, 'Admin')
    )
    admin = models.BooleanField(default=False)

    user_type = models.PositiveSmallIntegerField(
        choices=USER_TYPES, default=1)

    active = models.BooleanField(default=False)

    screen_name = models.CharField(max_length=20, blank=False)

    phone_number = models.CharField(max_length=12)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['screen_name', ]

    objects = UserManager()

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.screen_name

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    def is_email_password_exist(self, email, password):
        return User.objects.filter(Q(email=email) & Q(password=password)).exists()
        # 이 object 를 사용하지 않고 단순히 존재하는지만 확인할 때는 캐싱을 하지 않는
        # User.objects.filter(Q(email=self.email) & Q(password=self.password)).exists() 가 좋고
        # 이 object 의 내용이 존재하고, 이 내용을 사용하려는 목적이라면 캐싱을 하는
        # if User.objects.filter(Q(email=self.email) & Q(password=self.password))
        # ... 가 좋다.
        # (대략 10%)만약 사용자가 틀리게 입력하면 object 가 없을 것이고
        # (대략 90%)만약 사용자가 바르게 입력하면 object 가 있을 것이다.
        # 하지만 여기서는 object 가 있더라도 이 object 를 사용하는 것이
        # 아니기 때문에 .exists() 를 사용하였다.
        # 존재하면 True 를 반환하고
        # 존재하지 않으면 False 를 반환한다.

    def __str__(self):
        return "email: %s, {screen_name: %s}" % (self.email, self.screen_name)

    @property
    def is_staff(self):
        return self.user_type

    @property
    def is_admin(self):
        return self.admin

    @property
    def is_active(self):
        return self.active
