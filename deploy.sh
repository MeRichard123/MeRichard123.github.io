#!/usr/bin/env sh
rm docs
npm run build
mv build docs
git add .
git commit -m 'deploy'
git push -u origin main