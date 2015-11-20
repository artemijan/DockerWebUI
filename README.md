# DockerWebUI
user web interface for [docker registry (v2)](https://docs.docker.com/registry/spec/api/) based on angular
### Main things
- common

```shell
npm install
bower install
```

- create dist

```shell
grunt dist --env=dist
```

- for developing

```shell
grunt serve
```

or

```shell
grunt serve --env=dev
```

### All configs are in config folder
you can configure build process in env.js

## How can i configure it for Nginx

nginx config file

```php
server {
	listen 10.10.1.58:9001; #listen for
	root /home/artem/Develops/DockerWebUI/dist; #provide your dist location here
	underscores_in_headers on;
	location / {                                #map all static requests
		root /home/artem/Develops/DockerWebUI/dist;
		index index.html;
	}
	#map api calls to localhost:5000 (it's my registry daemon)
	location /v2 {
        	proxy_set_header X-Real-IP $remote_addr;
        	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        	proxy_set_header Host $http_host;
        	proxy_set_header X-NginX-Proxy true;
        	proxy_pass http://localhost:5000;
        	proxy_redirect off;
    	}
}
```