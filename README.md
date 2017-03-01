# README 
- This repository is ichiren1 shuffle.

- URL
 - http://useful-shuffle.club/

## Setup
```
$ git clone git@github.com:ichiren1/useful-shuffle.git
$ cd useful-shuffle
$ bundle install --job=4
$ bundle exec rails db:create
```

## Setup(Using Docker)
- Install `Docker for Mac` or `Docker for Windows`

```
$ git clone git@github.com:ichiren1/useful-shuffle.git
$ cd useful-shuffle
$ docker-compose run --rm spring rails db:setup
$ docker-compose up -d
```
