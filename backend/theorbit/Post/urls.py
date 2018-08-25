from django.conf.urls import url

from Post.views import UserPageLandingPostView, GeneralPostDetailView

urlpatterns = [
    url(r'^api/userposts/$', UserPageLandingPostView.as_view()),
    url(r'^api/generalpost/(?P<pk>[0-9]+)/$', GeneralPostDetailView.as_view())
]
