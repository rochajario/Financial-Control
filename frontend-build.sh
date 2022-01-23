#!/usr/bin/env sh

printf "\nPreparing script for run"
PROJECT_FOLDER=$PWD
DOCS_FOLDER="$PWD/docs"

printf "\nRunning deploy from: $PROJECT_FOLDER\n"

printf "\nListening for execution errors\n"
set -e

printf "\nRemoving docs folder if exists\n"
if [ -d "$DOCS_FOLDER" ]; then
    rm -rf $DOCS_FOLDER
fi

printf '\nBuilding Vue.js App for publishing...\n'
cd ./modules/frontend
npm install
npm run build

printf '\nMoving dist folder files to docs folder and cleaning build...\n'
mkdir ../../docs
mv ./dist/* ../..//docs
rm -rf ./dist

