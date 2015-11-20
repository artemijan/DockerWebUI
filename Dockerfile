FROM ubuntu:15.10

MAINTAINER Artem Fedorov <artem.fedorov@logicify.com>

# Install
RUN apt-get update
RUN apt-get install --no-install-recommends -y git nodejs npm nginx

RUN ln -s /usr/bin/nodejs /usr/bin/node

ADD . /DockerWebUI

RUN cd /DockerWebUI; git clean -fxd

RUN cd /DockerWebUI; ./setup.sh

COPY ./localhost.conf /etc/nginx/sites-enabled/

EXPOSE 9000 9001

RUN nginx -s reload