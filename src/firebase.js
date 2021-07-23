import firebase from "firebase/app";
import "firebase/auth";

// auth from firebase
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBK1NoGrxIyhe81YJhzKByUeRgX8w3XBak",
    authDomain: "wechat-9d04a.firebaseapp.com",
    projectId: "wechat-9d04a",
    storageBucket: "wechat-9d04a.appspot.com",
    messagingSenderId: "73064585424",
    appId: "1:73064585424:web:baad3a84518983b7c4a6d5",
  })
  .auth();
