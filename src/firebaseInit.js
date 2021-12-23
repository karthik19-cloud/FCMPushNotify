import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUEHyPATBWEuH5fp-_GVd-KwseSafWI7c",
    authDomain: "weather-461c1.firebaseapp.com",
    databaseURL: "https://weather-461c1.firebaseio.com",
    projectId: "weather-461c1",
    storageBucket: "weather-461c1.appspot.com",
    messagingSenderId: "1043412625214",
    appId: "1:1043412625214:web:7841637689d2af00f7ee6f"
};

let getMessageToken, onMessageListener;


const firebaseApp = initializeApp(firebaseConfig);



const messaging = getMessaging(firebaseApp);



const publicKey = "BDIB_hyNkWQtqLgo8vi0Sp9UcJzPESLfXYYBEoRQxtW8cK7zPXcGVxmWmfN2rRzIE_sGQtoWpZKpBHG0hzuYEBg";




getMessageToken = (setTokenFound) => {
    return getToken(messaging, { vapidKey: publicKey }).then(currentToken => {
        if (currentToken) {
            setTokenFound(currentToken);
        } else {
            setTokenFound(currentToken);
        }
    }).catch(error => {
        console.log("An error occurred while retrieving token. ", error);
    })
};


onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });

export default {
    getMessageToken, onMessageListener
}