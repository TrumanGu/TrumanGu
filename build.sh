#!/bin/bash

set -e
set -x

OUTPUT_DIR="/www/wwwroot/blog"

. /root/.nvm/nvm.sh

nvm use 12
npm install yarn --global

rm -rf node_modules

yarn
yarn build
rm -rf $OUTPUT_DIR/*
mv dist/* $OUTPUT_DIR

