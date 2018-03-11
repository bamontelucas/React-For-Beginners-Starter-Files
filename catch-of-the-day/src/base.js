import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBt7TZ7w-bsmrvpdyV2yifTZmnL_OqHQgs",
    authDomain: "catch-of-the-day-bamontelucas.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-bamontelucas.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;