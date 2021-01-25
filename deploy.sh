#!/bin/sh
set -e

echo "Deploying application ..."

git fetch origin deploy
git reset --hard origin/deploy

npm run build

cp -Rf dist/ ../frontend

echo "Application deployed!"
