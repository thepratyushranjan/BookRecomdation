# Book-Recommendation
BookRecommendation is a community-driven platform that leverages the Google Books API to help users discover, share, and interact with book recommendations.
# README #

__Backend commands__ 
==== 

### __1. Virtual environment__ 
```bash 
pip install virtualenv # install virtualenv 

virtualenv venv 

# windows 
`source venv/Scripts/activate` # activate virtual env 

# lniux 
source venv/bin/activate # activate virtual env 

pip install -r req.txt   #install all dependencies (listed in Pipfile) in virtual env 


python manage.py runserver  # to run command direct from virtual env 
``` 

### __2. Start Django server__ 
```bash 
migrate 
python manage.py runserver 
``` 

### __3. Migrations__ 
```bash 
source venv/bin/activate  
python manage.py makemigrations 
python mange.py migrate 
``` 


__Frontend commands__ 
====== 

### __1. React__ 
```bash 
cd frontend
yarn # install dependencies 

# start rect server 
yarn start # run react on seperate dev server (on port 3000, default only) | (for development only) 

yarn build # craete build on watch (for production and development both) 

yarn preview # serve build (on port 3000, default ) | (for production onlly)

```

### __3. All API With UI__ 
-> Deployment Update: Successful Configuration and Deployment of API and UI

```Integration with Google Books API:-
url:- 
http://localhost:8000/api/search/?q=AWS

``` 
# Output:-
![Book_1](https://github.com/user-attachments/assets/daf8222d-2c71-430c-9f94-1c7171e2c023)

```Community Book Recommendations(Add New Book ):-
url:-Post Request

http://localhost:8000/api/recommendations/

``` 
# Output:-
![books_2](https://github.com/user-attachments/assets/f32ea832-5486-4a43-932c-efda97ddd9de)

```Community Book Recommendations(Click blue button  Book Recommendations):-
url:- Get Request

http://localhost:8000/api/recommendations/

``` 
# Output:-![book_3](https://github.com/user-attachments/assets/fe9a4b2c-8496-423d-8c92-38b74d109192)

```Community Book Recommendations(Search Filter):-
url:- Get filter request for genre, rating, and publication date


http://localhost:8000/api/recommendations/?genre=Education&rating=5&publication_date=2024-08-17/

# Individual also used

 1:-  rating=>  http://localhost:8000/api/recommendations/?genre=&rating=5&publication_date=
 2:-  genre=>  http://localhost:8000/api/recommendations/?genre=Education&rating=&publication_date=
 3:-  publication date=>  http://localhost:8000/api/recommendations/?genre=&rating=&publication_date=publication_date=2024-08-17/

``` 
# Output_1:-![cf](https://github.com/user-attachments/assets/7e68f8b4-66cb-4e7a-a53c-c61f91fcfd1b)
# Output_2:-![books_4_f](https://github.com/user-attachments/assets/dfd29e47-f1d2-4d6c-9812-13cb791eea7b)

# Output_3:-![books_6_f](https://github.com/user-attachments/assets/f05e47c4-b8e8-4d96-ba5c-60cf54827448)

# Output_4:-![books_8_f](https://github.com/user-attachments/assets/c4f85946-8081-4300-8da2-f8ff5d05f115)






