from django.conf.urls import url

from Post.views import UserPagePostList, GeneralPostDetailView, GeneralPostCreateView

urlpatterns = [
    url(r'^api/userposts/$', UserPagePostList.as_view()),
    url(r'^api/generalpostcreate/$',
        GeneralPostCreateView.as_view()),
    url(r'^api/generalpost/(?P<pk>[0-9]+)/$', GeneralPostDetailView.as_view())
]
