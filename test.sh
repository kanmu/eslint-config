#!/usr/bin/env bash

cd example
npm install
configs="./.eslintrc*"

for config in $configs; do
    npm run eslint -- -c $config ./index.js
done
