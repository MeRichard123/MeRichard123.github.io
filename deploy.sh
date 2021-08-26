#!/usr/bin/env sh
mv docs build
npm run build
mv build docs
git add .
git commit -m 'deploy'
git push -u origin main