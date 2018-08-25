from django.db import models

from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class UserManager(BaseUserManager):

    def create_user(self, email, screen_name, password=None):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.screen_name = screen_name
        user.save(using=self._db)
        return user

    def create_staffuser(self, email, screen_name, password):
        """
        Creates and saves a staff user with the given email and password.
        """
        user = self.create_user(
            email,
            password=password,
            screen_name=screen_name,
        )
        user.user_type = 2
        user.save(using=self._db)
        return user

    def create_superuser(self, email, screen_name, password):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(
            email,
            password=password,
            screen_name=screen_name,
        )
        user.user_type = 5
        user.admin = True
        user.active = True
        user.save(using=self._db)
        return user
