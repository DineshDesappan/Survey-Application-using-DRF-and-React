from django.db import models

# Create your models here.

# class AvailableSurveys(models.model):
    
class Survey(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class Questions(models.Model):
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE, related_name='questions')
    question_text = models.TextField()

    def __str__(self):
        return self.question_text
    
class Choices(models.Model):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE, related_name='choices')
    choice_text = models.CharField(max_length=100)
    
    def __str__(self):
        return self.choice_text
    
class Responses(models.Model):
    name = models.CharField(max_length=100, default='')
    email = models.EmailField(default='' )
    
    def __str__(self):
        return f"{self.name} - {self.email}"