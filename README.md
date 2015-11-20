# DockerWebUI
user web interface for docker registry based on angular
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

```php
server {
	listen 10.10.1.58:9001;
	root /home/artem/Develops/DockerWebUI/dist;
	underscores_in_headers on;
	location / {
		root /home/artem/Develops/DockerWebUI/dist;
		index index.html;
	}
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