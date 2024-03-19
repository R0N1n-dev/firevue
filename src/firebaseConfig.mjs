import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyC0RUfdb2U8cwneZlH6quqqXTGhSSs8k6c",
  authDomain: "ronin-auth.firebaseapp.com",
  databaseURL: "https://ronin-auth-default-rtdb.firebaseio.com",
  projectId: "ronin-auth",
  storageBucket: "ronin-auth.appspot.com",
  messagingSenderId: "330500904760",
  appId: "1:330500904760:web:2d6f1c6e2c947bb9e9d3cd",
  databaseURL: "https://ronin-auth-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const rdb = getDatabase(app);

export { auth, db, rdb };
