from rest_framework import serializers
from .models import Survey, Questions, Choices, Responses
class ChoicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choices
        fields = '__all__'
        
class QuestionsSerializer(serializers.ModelSerializer):
    survey = serializers.StringRelatedField()
    choices = ChoicesSerializer(many=True)   
    class Meta:
        model = Questions
        fields = '__all__'
        
class SurveySerializer(serializers.ModelSerializer):
    questions = QuestionsSerializer(many=True, read_only=True)

    class Meta:
        model = Survey
        # fields = '__all__'
        exclude = ['created_at', 'updated_at']

class ResponsesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responses
        fields = '__all__'

        

        
