#!/usr/bin/env sh
set -e
cd modules/frontend/
npm install
npm run build
cd dist
git init
git add - A 
git commit -m 'deploy'
git push -f git@github.com:rochajario/Financial-Control.git main:gh-pages
cd - 