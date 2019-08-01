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

### Troubleshooting
If you get an `EACESS` permissions error while trying to install a global package, you can fix this by creating a new path for global NPM packages. If `~/.profile` exists on your machine, add the code below to the top line. Otherwise, create the file and add it:
```
NPM_CONFIG_PREFIX=~/.npm-global
```
Then run the following:
```
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
source ~/.profile
npm install -g expo-cli
```
