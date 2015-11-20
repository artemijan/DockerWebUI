FROM ubuntu:15.10

MAINTAINER Artem Fedorov <artem.fedorov@logicify.com>

# Install
RUN apt-get update
RUN apt-get install --no-install-recommends -y git nodejs npm nginx
RUN \
  rm -rf /var/lib/apt/lists/* && \
  echo "\ndaemon off;" >> /etc/nginx/nginx.conf && \
  chown -R www-data:www-data /var/lib/nginx

RUN ln -s /usr/bin/nodejs /usr/bin/node

ADD . /DockerWebUI

RUN cd /DockerWebUI; git clean -fxd

RUN cd /DockerWebUI; chmod +x ./setup.sh

COPY ./localhost.conf /etc/nginx/sites-enabled/
VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

EXPOSE 9000 9001

CMD ["nginx"]