import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDre79PMfXtsFIijfT8fUhzJoS462O-uGk",
  authDomain: "clone-ff-3b036.firebaseapp.com",
  projectId: "clone-ff-3b036",
  storageBucket: "clone-ff-3b036.appspot.com",
  messagingSenderId: "342890146463",
  appId: "1:342890146463:web:f3863e67505380caa850aa",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
