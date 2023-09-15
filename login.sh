#! /bin/bash

URL=$1

node login.js $URL "sauma" &

node login.js $URL "milan" &

node login.js $URL "riya" &