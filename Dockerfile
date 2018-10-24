# specify the node base image with your desired version node:<version>
FROM node:8

MAINTAINER hisasann

# Bundle app source
ADD ./app /src/app/

# Install app dependencies
COPY package.json /src/package.json
COPY yarn.lock /src/yarn.lock
COPY webpack.config.js /src/webpack.config.js
COPY ./dist/index.html /src/dist/index.html

RUN cd /src; yarn install

EXPOSE 4567

WORKDIR /src

CMD ["yarn", "build:dev"]
