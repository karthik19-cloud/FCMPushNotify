## Prerequisites
NodeJs
Npm

## Follow the below steps to run this app locally
```
1. Clone this project
2. Update the file src/firebaseInit.js  with your firebaseConfig. You can find FCM config in your fcm console --> settings --> General --> Under your app section
3. Update the file firebase-messaging-sw.js with your firebaseConfig. You can find FCM config in your fcm console --> settings --> General --> Under your app section
4. Update the file src/firebaseInit.js with your publicKey. You can find publicKey in your fcm console --> settings --> Cloud Messaging --> Under web config (key pair) 
5. npm install
6. npm run start
7. Access the application with http://localhost:9000
8. Run it on Chrome and open chrome developer tool(F12). Go to console and you can find the device token.
9. Go to FCM console and send test message using the device token that you have copied in the step #8. Refer the below link to send test message.
https://firebase.google.com/docs/cloud-messaging/js/first-message
```
