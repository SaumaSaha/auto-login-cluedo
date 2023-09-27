#! /bin/bash

URL=$1

node host.js $URL "a" &

node login.js $URL "b" &

node login.js $URL "c" &