from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/users/', include('users.urls')),
    path('api/challenges/', include('challenges.urls')),
    path('api/activities/', include('activities.urls')),
    path('api/leaderboard/', include('leaderboard.urls')),
    path('api/social/', include('social.urls')),
] 