from django.db import models

class BookRecommendation(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    description = models.TextField()
    cover_image = models.URLField(blank=True, null=True)
    rating = models.FloatField(blank=True, null=True)
    publication_date = models.DateField(blank=True, null=True)
    user = models.CharField(max_length=50)  # Example for user identification

    def __str__(self):
        return self.title