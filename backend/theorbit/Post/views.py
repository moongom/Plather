from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework import mixins

from django.shortcuts import render

from Post.models import GeneralPost
from Post.serializers import GeneralPostserializer
from Post.permissions import IsOwnerOrReadOnly


# for use with the UserDetail page
class UserPagePostList(generics.ListAPIView):
    serializer_class = GeneralPostserializer
    # lookup_url_kwarg = "id"
    #  defaults to pk if not explcit

    def get_queryset(self, *args, **kwargs):
        id = self.kwargs.get(self.lookup_url_kwarg)
        return GeneralPost.objects.filter(user_id=id)


class GeneralPostDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = GeneralPost.objects.all()
    serializer_class = GeneralPostserializer

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class GeneralPostCreateView(generics.CreateAPIView):
    serializer_class = GeneralPostserializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
