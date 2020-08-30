import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

// var firebase = require('firebase/app');
// require('firebase/auth');
// require('firebase/database');

// var firebaseConf = {
//   apiKey: "AIzaSyC9OnPznM4MOdRiRCR1fU08pA0gJokDvi4",
//   authDomain: "artsamaanata.firebaseapp.com",
//   databaseURL: "https://artsamaanata.firebaseio.com",
//   projectId: "artsamaanata",
//   storageBucket: "artsamaanata.appspot.com",
//   messagingSenderId: "646180968014",
//   appId: "1:646180968014:web:e422bf5070ea40bbab951f",
//   measurementId: "G-5CRN4SH3BE"
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
