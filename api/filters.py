import django_filters
from .models import BookRecommendation

class BookRecommendationFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(field_name='title', lookup_expr='icontains')
    author = django_filters.CharFilter(field_name='author', lookup_expr='icontains')
    rating = django_filters.NumberFilter(field_name='rating', lookup_expr='gte')
    publication_date = django_filters.DateFilter(field_name='publication_date', lookup_expr='gte')
    genre = django_filters.CharFilter(field_name='genre', lookup_expr='icontains')  

    class Meta:
        model = BookRecommendation
        fields = ['title', 'author', 'rating', 'publication_date', 'genre']
