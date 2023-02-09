from django.shortcuts import render
from .models import Article
import requests
from django.urls import reverse

def index(request):
    api_key = '15866422dea04a8b85fc0ae163cdca13'
    url = f'https://newsapi.org/v2/top-headlines?country=us&apiKey={api_key}'
    response = requests.get(url)
    data = response.json()
    latest_articles = data['articles']
    context = {'latest_articles': latest_articles}
    return render(request, 'news/index.html', context)

def detail(request, article_id):
    api_key = '15866422dea04a8b85fc0ae163cdca13'
    url = f'https://newsapi.org/v2/everything?q={article_id}&apiKey={api_key}'
    response = requests.get(url)
    data = response.json()
    articles = data['articles']
    if len(articles) > 0:
        article = articles[0]
    else:
        article = None
    context = {
        'article': article,
    }
    return render(request, 'news/details.html', context)
def search(request):
    query = request.GET.get('q')
    if query:
        articles = Article.objects.filter(author__contains=query)
        context = {'articles': articles}
        return render(request, 'news/search.html', context)
    else:
        error_message = "Please enter a valid search term."
        context = {'error_message': error_message}
        return render(request, 'news/search.html', context)