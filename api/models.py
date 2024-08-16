from django.db import models

class BookRecommendation(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    description = models.TextField()
    cover_image = models.URLField(blank=True, null=True)
    rating = models.FloatField(blank=True, null=True)
    publication_date = models.DateField(blank=True, null=True)
    genre = models.CharField(max_length=30, blank=True, null=True)  # Add this line

    def __str__(self):
        return self.title

class Comment(models.Model):
    recommendation = models.ForeignKey(BookRecommendation, on_delete=models.CASCADE, related_name='comments')
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment: {self.text[:20]}"

class Like(models.Model):
    recommendation = models.ForeignKey(BookRecommendation, on_delete=models.CASCADE, related_name='likes')

    def __str__(self):
        return f"Like on {self.recommendation.title}"
