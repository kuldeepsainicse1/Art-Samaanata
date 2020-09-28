import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

// var firebase = require('firebase/app');
// require('firebase/auth');
// require('firebase/database');


// const firebaseConf = {
//   apiKey: "AIzaSyDcbDFnu1yA_yBaHqkq76lonl4rtrld6h8",
//   authDomain: "mystic-react.firebaseapp.com",
//   databaseURL: "https://mystic-react.firebaseio.com",
//   projectId: "mystic-react",
//   storageBucket: "mystic-react.appspot.com",
//   messagingSenderId: "48483195767",
//   appId: "1:48483195767:web:c4860716d88a59244f1f72",
//   measurementId: "G-B3N1589CDN"
// };

const firebaseConf = {
  apiKey: "AIzaSyAF9mTeX0VB22sJEET_YI4bN_4LX_1cp0U",
  authDomain: "art-samaanata.firebaseapp.com",
  databaseURL: "https://art-samaanata.firebaseio.com",
  projectId: "art-samaanata",
  storageBucket: "art-samaanata.appspot.com",
  messagingSenderId: "129834962230",
  appId: "1:129834962230:web:f469507818f597609db797",
  measurementId: "G-V4KR20VKTT"
};
export const firebaseConfig=firebaseConf;
export const myFirebase = firebase.initializeApp(firebaseConf);
// console.log("HHHHHHHHH"+myFirebase.database()+"::");

// const baseDb = myFirebase.firestore();
// export const db = baseDb;
