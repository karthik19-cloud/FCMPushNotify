// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDUEHyPATBWEuH5fp-_GVd-KwseSafWI7c",
  authDomain: "weather-461c1.firebaseapp.com",
  databaseURL: "https://weather-461c1.firebaseio.com",
  projectId: "weather-461c1",
  storageBucket: "weather-461c1.appspot.com",
  messagingSenderId: "1043412625214",
  appId: "1:1043412625214:web:7841637689d2af00f7ee6f"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

console.log("messaging", messaging);

if('serviceWorker' in navigator)
{
  navigator.serviceWorker.register('../firebase-messaging-sw.js').then(function(registration){
    console.log("register")
  }).catch(function(err){
    console.log(err)
  })
}

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

 