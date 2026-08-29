// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

// Firebase Analytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";

// Firebase Authentication
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

// Firebase Firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyArxQC_65qwlwgn7qDdhFqPdfMtSYnzp-E",
    authDomain: "djeli-e13bd.firebaseapp.com",
    projectId: "djeli-e13bd",
    storageBucket: "djeli-e13bd.firebasestorage.app",
    messagingSenderId: "951006704130",
    appId: "1:951006704130:web:1a54c95bb69ad2a9bb6d1b",
    measurementId: "G-G467GXLJCM"
};


// Initialisation Firebase
const app = initializeApp(firebaseConfig);


// Analytics
const analytics = getAnalytics(app);


// Authentication
const auth = getAuth(app);


// Firestore
const db = getFirestore(app);


// On exporte pour les autres fichiers
export {
    app,
    analytics,
    auth,
    db
};


console.log("🔥 Firebase Djeli connecté !");
console.log("📊 Google Analytics activé !");
console.log("🔐 Firebase Authentication prêt !");
console.log("🗄️ Firestore prêt !");