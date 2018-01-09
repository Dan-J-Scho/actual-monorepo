FROM node:8.9.1-alpine

RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm

# changes ownership to user
WORKDIR /code

# Copy app to /code
COPY . /code

# Install app and dependencies into /src
RUN cd /code; npm install

EXPOSE 3000

CMD cd /code && node ./app.js

