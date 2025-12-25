// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFcVgtofCuu3uQpMiofAPm3JQ0xiaeJVQ",
  authDomain: "mutoiba-textiles.firebaseapp.com",
  projectId: "mutoiba-textiles",
  storageBucket: "mutoiba-textiles.appspot.com",
  messagingSenderId: "544691020034",
  appId: "1:544691020034:web:82ee6c0f8e94256fbce21b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
