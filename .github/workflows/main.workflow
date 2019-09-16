name: Yarn build

on: [push, pull_request]

jobs:
  build:
    name: Build production
    runs-on: ubuntu-latest
    steps:
    - uses: ajupov/crm-app-frontend@master
    
    - name: Run a multi-line script
      run: |
        yarn install
        yarn build-prod
