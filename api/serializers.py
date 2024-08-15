from rest_framework import serializers
from .models import BookRecommendation

class BookRecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookRecommendation
        fields = ['id', 'title', 'author', 'description', 'cover_image', 'rating', 'publication_date', 'user']
