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

## Using fake backend api

all routes are described in app/scripts/fakeBackend.js

```shell
grunt serve --env=fake
```

that's it :)

##### if you want use real registry api allocated on your local machine

nginx config

```php
server {
	listen localhost:9001;
	root /home/artem/Develops/DockerWebUI/dist;
	underscores_in_headers on;
	location / {
		root /home/artem/Develops/DockerWebUI/dist;
		index index.html;
	}
	location /v2 {
        	proxy_set_header X-Real-IP $remote_addr;
		add_header Access-Control-Allow-Origin *;                       #disable CORS
        	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        	proxy_set_header Host $http_host;
        	proxy_set_header X-NginX-Proxy true;
        	proxy_pass http://localhost:5000;
        	proxy_redirect off;
    	}
}
```

setup environment in config/env.js "dev" property

```js
{
        showVersionInfo: true,
        siteUrl: 'http://0.0.0.0:9000',
        apiUrl: 'http://localhost:9001',    //here is api url, put in into nginx config and disable CORS (just add a header)
        useHeaderAuth: false,               //should be false if you are using local machine
        useCookiesAuth: false,
        useFakeAPIService: false,           //you can use fake backend (fakeBackend.js file)
        minimizeJs: false,                  // should be false if you are using "grunt serve"
        minimizeCss: false,                 //the same as previous
        generateSourceMaps: true

}
```


### All configs are in config folder
you can configure build process in env.js

## How I can configure it for Nginx

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