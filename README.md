## HT6MInterface
A simple skeleton for React and Django with legacy command line by file

## Requirements
1. Django2
1. Rabbitmq
1. node 8.9.4 for Reactjs

## How to install dependencies
1. `pip install -r requirements.txt`

## How to run in development mode
```
$ export FLASK_APP=main.py
$ export FLASK_DEBUG=1
$ flask run
```
By default it will start `Flask` at port `5000` with hot reload

## Hot to run React in development mode
```
$ cd f1
$ npm install
$ npm start
```
By default `npm` will start serving file at port `3000` with hot reload
Start browse web from `3000`

## Celery&Rabbitmq
1. `brew install rabbitmq`
1. `brew services start rabbitmq`
1. `celery -A ht6m worker -l info`. To start `worker` in the another terminal
1. `python manage.py runserver`
1. `npm start`