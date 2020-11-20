#!/bin/sh
IMAGE=mongo:3.6.21

# pull the image
docker pull $IMAGE;

# create container and start container
docker-compse -f ./docker-compose.yml up -d

