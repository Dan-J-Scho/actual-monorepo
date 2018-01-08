FROM node:8.9.1-alpine

ENV USERNAME nodeuser

# changes ownership to user
RUN adduser -D $USERNAME && \
    mkdir /code && \
    chown $USERNAME:$USERNAME /code

USER $USERNAME
WORKDIR /code

# Copy app to /code
COPY . /code

USER root
RUN find /code -user 0 -print0 | xargs -0 chown $USERNAME:$USERNAME
USER $USERNAME

# Install app and dependencies into /src
RUN cd /code; npm install

EXPOSE 3000

CMD cd /code && node ./app.js

