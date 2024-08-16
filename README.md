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



