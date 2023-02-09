from django.db import models
from django.urls import reverse

class Article(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    url = models.URLField()
    pub_date = models.DateTimeField()
    source = models.CharField(max_length=100)
    author = models.CharField(max_length=100) 
    image = models.ImageField(upload_to='news/')

