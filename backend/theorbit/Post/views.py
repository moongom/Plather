from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework import mixins

from django.shortcuts import render

from Post.models import GeneralPost
from Post.serializers import GeneralPostserializer
from Post.permissions import IsOwnerOrReadOnly


class UserPageLandingPostView(generics.ListAPIView):
    serializer_class = GeneralPostserializer

    def get_queryset(self):
        user = self.request.user
        return GeneralPost.objects.filter(user_id=user.id).all()


class GeneralPostDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = GeneralPost.objects.all()
    serializer_class = GeneralPostserializer

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class GeneralPostCreateView(generics.CreateAPIView):
    serializer_class = GeneralPostserializer
    permission_classes = (IsAuthenticated)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
