from rest_framework import parsers, viewsets
from rest_framework.decorators import action, api_view
from rest_framework.response import Response


from .models import User
from .serializers import UserSerializer

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    parser_classes = (parsers.MultiPartParser, parsers.FormParser, parsers.JSONParser)
    http_method_names = ['get', 'post', 'patch', 'delete']

    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            unique_filename = f"{request.data['username']}_profile_picture.png"
            user = serializer.save(profile_picture=unique_filename)
            user.profile_picture = request.data['profile_picture']
            user.profile_picture.name = unique_filename
            user.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def partial_update(self, request, pk=None):
        user = User.objects.get(pk=pk)
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def destroy(self, request, pk=None):
        user = User.objects.get(pk=pk)
        user.delete()
        return Response(status=204)
