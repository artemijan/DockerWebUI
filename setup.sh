#!/bin/bash
set -e

npm install bower
npm install grunt
npm install
bower install
grunt dist --env=dist