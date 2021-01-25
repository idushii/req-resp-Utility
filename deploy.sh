#!/bin/sh
set -e

echo "Deploying application ..."

(
  ../start.sh 1 &&
    git fetch origin deploy &&
    git reset --hard origin/deploy &&
    npm install &&
    npm run build &&
    cp -Rf dist/req-resp-Utility ../frontend &&
    echo "Application deployed!" &&
    ../done.sh 1
)

errorCode=$?
if [ $errorCode -ne 0 ]; then
  echo "We have an error" && ../error.sh 1

  exit $errorCode
fi
