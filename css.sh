#!/bin/bash
rm -rf dist
mkdir -p dist
cat node_modules/minireset.css/minireset.css >> dist/modern.css
cat src/{variables,type,misc,layout,tables,lists}.css >> dist/modern.css
