import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDJDFqevrnRTu4G9fMi4ISIQ9x8vsKd84E',
  authDomain: 'vue-firemoviex.firebaseapp.com',
  databaseURL: 'https://vue-firemoviex.firebaseio.com',
  storageBucket: 'vue-firemoviex.appspot.com'
});

const firebasedb = firebaseApp.database();

export default firebasedb;
