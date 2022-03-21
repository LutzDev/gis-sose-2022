@echo off
npm run build
cd dist
git init
git add -A
git commit -m deploy
git push -f git@github.com:LutzDev\gis-sose-2022.git master:gh-pages
cd -