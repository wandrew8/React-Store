import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4S-nM4__gMXYXs3eW3AsJTsQT_WLZHKo",
    authDomain: "react-store-andrew.firebaseapp.com",
    databaseURL: "https://react-store-andrew.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base