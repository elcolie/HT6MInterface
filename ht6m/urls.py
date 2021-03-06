"""ht6m URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

from apps.commons.views import get_username
from apps.scenarios.api.viewsets import test, time_series, basic, intermediate, test_add
from ht6m import api_urls

urlpatterns = [
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api-token-refresh/', refresh_jwt_token),
    url(r'^api-token-verify/', verify_jwt_token),
    path('admin/', admin.site.urls),
    path('api/', include(api_urls, namespace='apis')),
    path('test/', test, name='test'),
    path('test2/', test_add, name='test2'),
    path('time-series/', time_series, name='time-series'),
    path('username/', get_username, name='get-username'),
    path('api/basic/', basic, name='basic'),
    path('api/intermediate/', intermediate, name='intermediate'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
