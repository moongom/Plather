from django.conf.urls import url

from Account.views import (
    LoginView,
    LogoutView,
    RegisterView,
    UserDetailView
)

urlpatterns = [
    url(r'^api/login/$', LoginView.as_view(), name='rest_login'),
    url(r'^api/logout/$', LogoutView.as_view(), name='rest_logout'),
    url(r'^api/register/$', RegisterView.as_view(), name='rest_register'),
    url(r'^api/userdetail/(?P<pk>[0-9]+)/$', UserDetailView.as_view())
]
