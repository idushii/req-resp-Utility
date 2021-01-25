#!/bin/sh
set -e

echo "Deploying application ..."

git fetch origin deploy
git reset --hard origin/deploy

npm install

npm run build

cp -Rf dist/req-resp-Utility  ../frontend

echo "Application deployed!"
