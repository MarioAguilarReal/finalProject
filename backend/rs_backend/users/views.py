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
    if http_method_names == 'post':
        print('post')

    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)
    
