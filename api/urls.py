from django.urls import path
from .views import search_books, create_recommendation, list_recommendations, retrieve_recommendation

urlpatterns = [
    # Google Books API Integration
    path('search/', search_books, name='search_books'),

    # Book Recommendations Endpoints
    path('recommendations/', list_recommendations, name='list_recommendations'),
    path('recommendations/create/', create_recommendation, name='create_recommendation'),
    path('recommendations/<int:pk>/', retrieve_recommendation, name='retrieve_recommendation'),
]
