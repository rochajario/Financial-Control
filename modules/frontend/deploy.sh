#!/usr/bin/env sh
set -e
npm install
npm run build
cd dist
git init
git add *
git commit -m 'deploy'
git push -f git@github.com:rochajario/Financial-Control.git main:gh-pages
cd - 

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

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/setup-node@v1
      with:
        node-version: '12'
    - uses: actions/checkout@v2
      with:
        persist-credentials: false # otherwise, the token used is the GITHUB_TOKEN, instead of your personal access token.
        fetch-depth: 0 # otherwise, there would be errors pushing refs to the destination repository.
    - name: Create local changes
      run: |
        cd ./modules/frontend
        npm install
        npm run build
        cd dist
    - name: Commit files
      run: |
        git checkout gh-pages
        git pull
        git config --local user.email "rochajario@gmail.com"
        git config --local user.name "Jario Rocha"
        git commit -m "Github Pages Deploy" -a
    - name: Push changes
      uses: ad-m/github-push-action@master
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        branch: gh-pages