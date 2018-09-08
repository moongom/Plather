from django.conf.urls import url

from Account.views import (
    LoginView,
    LogoutView,
    RegisterView,
    UserList,
    UserDetailView
)

urlpatterns = [
    url(r'^api/login/$', LoginView.as_view(), name='rest_login'),
    url(r'^api/logout/$', LogoutView.as_view(), name='rest_logout'),
    url(r'^api/register/$', RegisterView.as_view(), name='rest_register'),
    url(r'^api/users/$', UserList.as_view()),
    url(r'^api/users/(?P<email>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})/$', UserDetailView.as_view())
    

    
]

# url(r'^api/userdetail/(?P<pk>[0-9]+)/$', UserDetailView.as_view())