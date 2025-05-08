from rest_framework import viewsets, permissions, decorators, response
from .models import Challenge
from .serializers import ChallengeSerializer

class ChallengeViewSet(viewsets.ModelViewSet):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer
    permission_classes = [permissions.IsAuthenticated]

    @decorators.action(detail=True, methods=['post'])
    def join(self, request, pk=None):
        # Logic for joining a challenge
        return response.Response({'status': 'joined'}) 