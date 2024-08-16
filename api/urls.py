from django.urls import path
from .views import (
    search_books,
    create_recommendation,
    list_recommendations,
    retrieve_recommendation,
    like_recommendation,
    add_comment
)

urlpatterns = [
    # Google Books API Integration
    path('search/', search_books, name='search_books'),

    # Book Recommendations Endpoints
    path('recommendations/', list_recommendations, name='list_recommendations'),
    path('recommendations/create/', create_recommendation, name='create_recommendation'),
    path('recommendations/<int:pk>/', retrieve_recommendation, name='retrieve_recommendation'),

    # User Interactions
    path('recommendations/<int:pk>/like/', like_recommendation, name='like_recommendation'),
    path('recommendations/<int:pk>/comment/', add_comment, name='add_comment'),
]
