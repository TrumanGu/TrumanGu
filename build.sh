#!/bin/bash
cd ~/TrumanGu && git pull
cd ~/TrumanGu && npm i
cd ~/TrumanGu && npm run build
rm /www/wwwroot/blog/* -rf && cp ~/TrumanGu/dist/* /www/wwwroot/blog/ -r