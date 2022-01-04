# DocVaultAppCode

## Description
It is app for mobile devices (android/ios) tested on android devices, Which helps people store their important documents like aadhaar card, pan card, Driving licence etc. efficiently in one place. 

## Security
### App Security
This app uses your device's local authentication program for validating user i.e. give permission to enter in app.
#### Android
- Pin Lock
- FingerPrint Scan (if available)
- Retina Scan (if available)
- Face Scan (if available)
#### IOS
- Pin Lock
- Face Lock

### Storage Security
This app uses some highly efficient libraries like random and secure store of expo to store your data in encrypted form that can only accesible by app itSelf.
#### Libraries
- SecureStorage
- Random
- Crypto

## How to install!!
### Step-1
Download .zip file from this repository.
### Step-2
Create account on Expo.dev
### Step-3 
Start Project of your choice.
### Step-4 
Make appropriete changes in app folder of source-code and app.json.
### Step-5
Build your app using
```
expo build:andoid
```
OR
```
expo build:ios
```
OR 
```
eas build
```
