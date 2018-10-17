from django.contrib.auth import (
    login as django_login,
    logout as django_logout,
    get_user_model,
)
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token as TokenModel

from django.views.decorators.debug import sensitive_post_parameters
from django.utils.decorators import method_decorator
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.mail import EmailMessage
from django.utils.encoding import force_bytes
from django.conf import settings
from django.contrib.auth.hashers import make_password

import logging
from django.utils.encoding import force_text
from django.utils.http import urlsafe_base64_decode as uid_decoder

from Account.models import User
from Account.serializers import CreateUserSerializer, LoginSerializer, PublicUserSerializer, TokenSerializer

from Post.permissions import IsOwnerOrReadOnly

User = get_user_model()

sensitive_post_parameters_m = method_decorator(
    sensitive_post_parameters(
        'password', 'old_password', 'new_password1', 'new_password2'
    )
)


def create_token(token_model, user, serializer):
    token, _ = token_model.objects.get_or_create(user=user)
    return token


class UserDetailView(RetrieveAPIView):
    queryset = User.objects.all()
    permission_classes = (IsOwnerOrReadOnly,)
    serializer_class = PublicUserSerializer

    def get_queryset(self):
        return User.objects.all()

    def get_object(self):
        queryset = self.get_queryset()
        filter = {}

        for field in self.multiple_lookup_fields:
            print(field)
            filter[field] = self.kwargs[field]

        obj = get_object_or_404(queryset, **filter)
        self.check_object_permissions(self.request, obj)
        return obj


class LoginView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = LoginSerializer
    token_model = TokenModel

    @sensitive_post_parameters_m
    # @sensitive_post_parameters_m 를 이용해서 민감 정보인 password
    # (보안상 중요한 데이터) 를 에러 리포팅 등에 포함되지 않도록 설정할 수 있음.
    def dispatch(self, *args, **kwargs):
        return super(LoginView, self).dispatch(*args, **kwargs)

    # GenericAPIView 는 rest_framework.views.APIView 를 상속하고
    # APIView 는 django.views.generic.View 를 상속한다.
    # View 클래스에는 as_view() 메소드와 dispatch() 메소드가 정의되어 있다.
    # (참고 : 사실 APIView 에서 as_view, dispatch 를 오버라이딩 함...)
    # 아래는 django.views.generic.View 의 dispatch() 메소드 이다.

    #########################################################
    # def dispatch(self, request, *args, **kwargs):
    #     if request.method.lower() in self.http_method_names:
    #         handler = getattr(self, request.method.lower(), self.http_method_not_allowed)
    #     else:
    #         handler = self.http_method_not_allowed
    #     return handler(request, *args, **kwargs)
    #########################################################

    # dispatch() 메소드가 어떤 HTTP 메소드로 요청되었는지 알아내고, 이를 중계해준다.
    # 즉, 인스턴스 내에서 해당 이름(HTTP Method)을 가지는 Method로 요청 중계.

    def process_login(self):
        django_login(self.request, self.user)

    def login(self):
        self.user = self.serializer.validated_data['user']
        self.token = create_token(self.token_model, self.user, self.serializer)
        if getattr(settings, 'REST_SESSION_LOGIN', True):
            self.process_login()

    def get_response_serializer(self):
        response_serializer = TokenSerializer
        return response_serializer

    def get_response(self):
        serializer_class = self.get_response_serializer()
        serializer = serializer_class(instance=self.token, context={
                                      'request': self.request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        self.request = request
        self.serializer = self.get_serializer(
            data=self.request.data, context={'request': request})
        self.serializer.is_valid(raise_exception=True)
        self.login()
        return self.get_response()


class LogoutView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        if getattr(settings, 'ACCOUNT_LOGOUT_ON_GET', False):
            response = self.logout(request)
        else:
            response = self.http_method_not_allowed(request, *args, **kwargs)

        return self.finalize_response(request, response, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.logout(request)

    def logout(self, request):
        try:
            request.user.auth_token.delete()
        except (AttributeError, ObjectDoesNotExist):
            pass

        django_logout(request)

        return Response({"detail": _("Successfully logged out.")},
                        status=status.HTTP_200_OK)


class RegisterView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CreateUserSerializer

    @sensitive_post_parameters_m
    def dispatch(self, *args, **kwargs):
        return super(RegisterView, self).dispatch(*args, **kwargs)

    def register(self):
        email = self.serializer.validated_data['email']
        password = self.serializer.validated_data['password']
        screen_name = self.serializer.validated_data['screen_name']
        phone_number = self.serializer.validated_data['phone_number']

        user = User.objects.create(
            email=email,
            screen_name=screen_name,
            phone_number=phone_number,
            active=True)

        user.set_password(password)

        user.save()
        return user

        # current_site = get_current_site(self.request)

        # subject = (_('Welcome To %s! Confirm Your Email') % current_site.name)
        # message = render_to_string('registration/user_activate_email.html', {
        #     'user': user,
        #     'domain': current_site.domain,
        #     'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        #     'token': PasswordResetTokenGenerator().make_token(user),
        # })
        # email = EmailMessage(subject, message, to=[user.email])
        # email.send()

    def post(self, request, *args, **kwargs):
        self.request = request
        self.serializer = self.get_serializer(
            data=self.request.data, context={'request': request})
        self.serializer.is_valid(raise_exception=True)
        self.register()
