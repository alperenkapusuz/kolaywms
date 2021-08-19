import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyAZmqXmobhdnYtfg2G1uqfEdM5qDAfh3Ho",

  authDomain: "kolaywms-951a1.firebaseapp.com",

  projectId: "kolaywms-951a1",

  storageBucket: "kolaywms-951a1.appspot.com",

  messagingSenderId: "194600080075",

  appId: "1:194600080075:web:9a7a54b651c2269d34414e"

};

const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default fire;
