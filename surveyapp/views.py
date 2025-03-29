from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Survey, Questions, Choices, Responses
from .serializers import SurveySerializer, QuestionsSerializer, ChoicesSerializer, ResponsesSerializer
from rest_framework import generics
# from rest_framework.permissions import is

# Create your views here.

class SurveyView(viewsets.ModelViewSet):
    queryset = Survey.objects.all()
    serializer_class = SurveySerializer
    # permission_classes = [IsAdminUser]
    
class QuestionsView(viewsets.ModelViewSet):
    queryset = Questions.objects.all()
    serializer_class = QuestionsSerializer
    # permission_classes = [IsAdminUser]

class ChoicesView(viewsets.ModelViewSet):
    queryset = Choices.objects.all()
    serializer_class = ChoicesSerializer
    # permission_classes = [IsAdminUser]
    
# @api_view(['POST'])
# def submit_survey(request):
#     try:
#         survey_id = request.data.get('survey_id')
#         responses = request.data.get('responses')  # Format: { questionId: choiceId }

#         for question_id, choice_id in responses.items():
#             Responses.objects.create(
#                 survey=survey_id,
#                 question=question_id,
#                 choice=choice_id
#             )

#         return Response({'message': 'Survey submitted successfully!'}, status=status.HTTP_201_CREATED)
#     except Exception as e:
#         return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class ResponseView(generics.ListCreateAPIView):
    queryset = Responses.objects.all()
    serializer_class = ResponsesSerializer
