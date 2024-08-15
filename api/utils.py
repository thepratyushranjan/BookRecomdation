import requests

GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes"

def fetch_books(query, api_key):
    params = {'q': query, 'key': api_key}
    response = requests.get(GOOGLE_BOOKS_API_URL, params=params)
    response.raise_for_status()
    return response.json()