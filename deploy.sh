#!/usr/bin/env sh


npm run build

cd dist 

git init
git add -A
git commit -m "New Deployment"
git push -f git@github.com:marcelabpetroli/portfolio main:gh-pages

cd -