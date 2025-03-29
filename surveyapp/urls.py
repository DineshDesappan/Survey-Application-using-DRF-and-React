from rest_framework.routers import DefaultRouter
from surveyapp.views import SurveyView, QuestionsView, ChoicesView, ResponseView


from django.urls import path, include



router = DefaultRouter()
router.register('surveys', SurveyView, basename='survey')
router.register('questions', QuestionsView, basename='questions')
router.register('choices', ChoicesView, basename='choices')

urlpatterns = [
        path('', include(router.urls)),
        path('survey/submit/', ResponseView.as_view())
]
