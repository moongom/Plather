from django.contrib.auth import authenticate, get_user_model
from django.conf import settings
from django.utils.translation import ugettext_lazy as _

from rest_framework import serializers, exceptions
from rest_framework.exceptions import ValidationError
from rest_framework.authtoken.models import Token as TokenModel

from django.utils.encoding import force_text
from django.contrib.auth.forms import SetPasswordForm
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_decode as uid_decoder


User = get_user_model()


# user reading situation
class PublicUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        read_only_fields = ('email', 'screen_name')

    def get_url(self, obj):
        return reverse("detail", kwargs={"email": obj.email})


# this is for login situations!! - set readonly and writeonly
class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=40)
    password = serializers.CharField(style={'input_type': 'password'})

    def _validate_email(self, email, password):
        user = None
        if email and password:
            user = authenticate(email=email, password=password)
        else:
            msg = _('Must include "email" and "password".')
            raise exceptions.ValidationError(msg)

        return user

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        user = self._validate_email(email, password)

        if user:
            if not user.active:
                msg = _('User account is not activated.')
                raise exceptions.ValidationError(msg)
        else:
            msg = _('Unable to log in with provided credentials.')
            raise exceptions.ValidationError(msg)

        attrs['user'] = user
        return attrs


class CreateUserSerializer(serializers.ModelSerializer):
    # for user creation!

    class Meta:
        model = User
        fields = ('email', 'screen_name', 'password', 'phone_number')
        extra_kwargs = {'password': {'write_only': True}, }

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            screen_name=validated_data['screen_name'],
            phone_number=validated_data['phone_number'])
        user.set_password(validated_data['password'])
        user.save()
        return user



class CreateGroupUserSerializer(serializers.ModelSerializer):
    # for user creation!

    class Meta:
        model = User
        fields = ('email', 'screen_name', 'password', 'phone_number')
        extra_kwargs = {'password': {'write_only': True}, }

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            screen_name=validated_data['screen_name'],
            phone_number=validated_data['phone_number'])
        user.set_password(validated_data['password'])
        user.save()
        return user



class TokenSerializer(serializers.ModelSerializer):

    class Meta:
        model = TokenModel
        fields = ('key',)
