FROM python:3.8

WORKDIR /backend/app

RUN apt-get update && apt-get install -y netcat-traditional

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY Pipfile Pipfile.lock ./

COPY ./wait.sh ./
RUN ["chmod", "+x", "/backend/app/wait.sh"]

RUN pip install --upgrade pip
RUN pip install pipenv
RUN pipenv run pip install django
RUN pipenv install --deploy --ignore-pipfile

COPY . .

CMD pipenv run python manage.py runserver 0.0.0.0:8000
