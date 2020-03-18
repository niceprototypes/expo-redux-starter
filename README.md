# expo-redux-starter
### Setup

1. Install Expo:
https://docs.expo.io/versions/latest/workflow/expo-cli/

2. Install React Native Debugger:
https://github.com/jhen0409/react-native-debugger

### Start
To start the Expo client:
```
yarn install
expo start
```
To start the debugger (in a different terminal instance):
```
yarn debug
```

### Enable live reloading
The debugger requires live reloading. To enable this, trigger the shake gesture on your emulator (for XCode go to `Hardware > Shake Gesture`) and disable hot reloading, then enable live reloading.

### Troubleshooting
If you get an `EACESS` permissions error while trying to install a global package, you can fix this by creating a new path for global NPM packages. If `~/.profile` exists on your machine, add the code below to the top line. Otherwise, create the file and add it:
```
PATH=~/.npm-global/bin:$PATH
```
Then run the following:
```
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
source ~/.profile
npm install -g expo-cli
```
