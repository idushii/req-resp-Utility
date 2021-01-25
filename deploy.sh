#!/bin/sh
set -e

echo "Deploying application ..."

# this subshell is a scope of try
# try
(
  git fetch origin deploy
  git reset --hard origin/deploy

  npm install1

  npm run build

  cp -Rf dist/req-resp-Utility  ../frontend

  echo "Application deployed!"
)
# and here we catch errors
# catch
errorCode=$?
if [ $errorCode -ne 0 ]; then
  echo "We have an error"


  exit $errorCode
fi
