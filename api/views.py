import requests
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import BookRecommendation
from .serializers import BookRecommendationSerializer

GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes"

@api_view(['GET'])
def search_books(request):
    query = request.query_params.get('q', '')
    api_key = 'AIzaSyCKlOZ2jUVEO2ZvBrGDceTe9klApG1yQak'  # Replace with your actual API key
    filter_type = request.query_params.get('filter', None)
    max_results = request.query_params.get('maxResults', '10')
    print_type = request.query_params.get('printType', None)
    lang_restrict = request.query_params.get('langRestrict', None)

    if not query:
        return Response({'error': 'Query parameter `q` is required.'}, status=status.HTTP_400_BAD_REQUEST)

    params = {
        'q': query,
        'key': api_key,
        'maxResults': max_results,
    }
    
    if filter_type: 
        params['filter'] = filter_type

    if print_type: 
        params['printType'] = print_type

    if lang_restrict:  
        params['langRestrict'] = lang_restrict

    try:
        response = requests.get(GOOGLE_BOOKS_API_URL, params=params)
        response.raise_for_status()
        return Response(response.json(), status=status.HTTP_200_OK)
    except requests.RequestException as e:

        error_response = response.json() if response.content else str(e)
        return Response({'error': error_response}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'POST'])
def list_recommendations(request):
    if request.method == 'GET':
        recommendations = BookRecommendation.objects.all()
        serializer = BookRecommendationSerializer(recommendations, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BookRecommendationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def retrieve_recommendation(request, pk):
    try:
        recommendation = BookRecommendation.objects.get(pk=pk)
    except BookRecommendation.DoesNotExist:
        return Response({'error': 'Recommendation not found.'}, status=status.HTTP_404_NOT_FOUND)

    serializer = BookRecommendationSerializer(recommendation)
    return Response(serializer.data)

@api_view(['POST'])
def create_recommendation(request):
    serializer = BookRecommendationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
