#!/bin/bash
set -e

npm install bower -g
npm install grunt -g
npm install
bower install
grunt dist --env=dist