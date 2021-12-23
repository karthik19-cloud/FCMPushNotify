import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
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
