FROM node:16.3-alpine

RUN npm install -g npm@8.5.0

WORKDIR /usr/src/app
