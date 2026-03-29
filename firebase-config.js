// ============================================================
//  firebase-config.js
//  ตั้งค่าการเชื่อมต่อ Firebase
//  *** แก้ไขค่าด้านล่างด้วย firebaseConfig ของคุณ ***
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔧 วาง firebaseConfig ที่ได้จาก Firebase Console ตรงนี้
const firebaseConfig = {
  apiKey:            "AIzaSyDTj6CkKOYnBb5ti_O2sAmo2xEWdzgXrEU",
  authDomain:        "traffic-police-web-bkk.firebaseapp.com",
  projectId:         "traffic-police-web-bkk",
  storageBucket:     "traffic-police-web-bkk.firebasestorage.app",
  messagingSenderId: "178664930281",
  appId:             "1:178664930281:web:81ce2f02c22ba7f5376978"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

export { auth, db };
