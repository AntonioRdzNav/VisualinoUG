import * as Firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/database'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCYPcXGaDbsdXxGL9CphXz2vXx_sarWqOE",
    authDomain: "visualino-ug.firebaseapp.com",
    databaseURL: "https://visualino-ug.firebaseio.com",
    projectId: "visualino-ug",
    storageBucket: "visualino-ug.appspot.com",
    messagingSenderId: "671108925946",
    appId: "1:671108925946:web:15abf2fdb676b3c622fc43",
    measurementId: "G-KFH1G5JL5D"
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();

export default Firebase;