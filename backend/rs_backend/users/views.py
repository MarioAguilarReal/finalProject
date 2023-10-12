from rest_framework import parsers, viewsets
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from .models import User
from .serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt

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
            return Response(status=200, data=serializer.data)
        return Response(status= 400, data=serializer.errors)

    def partial_update(self, request, pk=None):
        user = User.objects.get(pk=pk)
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status= 400,data = serializer.errors)

    def destroy(self, request, pk=None):
        user = User.objects.get(pk=pk)
        user.delete()
        return Response(status=204)

@api_view(['POST'])
@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        email = request.data['email']
        password = request.data['password']

        try:
            user = User.objects.get(email=email)
            print(user)
        except User.DoesNotExist:
            return Response({'error': 'El usuario no existe.'}, status=400)
        print(user.check_password(password))
        print(password)
        if user.check_password(password):
            # login(request, user)
            user_serializer = UserSerializer(user)
            return Response(user_serializer.data, status=200)

        return Response({'error': 'Contraseña incorrecta.'}, status=400)

    return Response({'error': 'Método no permitido.'}, status=405)


@api_view(['GET'])
def check_auth(request):
    if request.user.is_authenticated:
        return Response(True)
    return Response(False)

@api_view(['GET'])
def logout(request):
    if request.method == 'POST':
        logout(request)
        return Response(True)
    return Response(False)

