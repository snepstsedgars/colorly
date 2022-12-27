rm -rf ./dist-firebase-public

mkdir ./dist-firebase-public

yarn run build

cp -r ./public/* ./dist-firebase-public

cp -r ./dist/* ./dist-firebase-public