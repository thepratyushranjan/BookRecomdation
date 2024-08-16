from rest_framework import serializers
from .models import BookRecommendation, Comment, Like

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'text', 'created_at']  

class BookRecommendationSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    likes_count = serializers.SerializerMethodField()

    class Meta:
        model = BookRecommendation
        fields = ['id', 'title', 'author', 'description', 'cover_image', 'rating', 'publication_date', 'comments', 'likes_count','genre']  

    def get_likes_count(self, obj):
        return obj.likes.count()
