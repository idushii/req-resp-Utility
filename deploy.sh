#!/bin/sh
set -e

echo "Deploying application ..."

(
  ../start.sh 2 &&
    git fetch origin deploy &&
    git reset --hard origin/deploy &&
    npm install &&
    npm run build &&
    cp -Rf dist/req-resp-Utility ../frontend &&
    echo "Application deployed!" &&
    ../done.sh 2
)

errorCode=$?
if [ $errorCode -ne 0 ]; then
  echo "We have an error" && ../error.sh 2

  exit $errorCode
fi
