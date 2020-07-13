#!/bin/bash

set -e
set -x

OUTPUT_DIR="/www/wwwroot/blog/front"

. /root/.nvm/nvm.sh

nvm use 12
npm install yarn --global

rm -rf node_modules

yarn
yarn build

mv dist/* $OUTPUT_DIR

