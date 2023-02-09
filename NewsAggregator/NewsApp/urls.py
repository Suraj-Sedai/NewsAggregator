from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

# ...
app_name = 'news'

urlpatterns = [
    path('', views.index, name='index'),
    path('article/<int:article_id>/', views.detail, name='detail'),
    path('search/', views.search, name='search'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
