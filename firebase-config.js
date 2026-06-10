// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyACTwNOsxdFHya8L6C-tnDsUOXjVnbRQKI",
    authDomain: "lampfinance-1f7a0.firebaseapp.com",
    projectId: "lampfinance-1f7a0",
    storageBucket: "lampfinance-1f7a0.firebasestorage.app",
    messagingSenderId: "293507275091",
    appId: "1:293507275091:web:2ce3ba766852b23433a9a6",
    measurementId: "G-T0HV7YD7S1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const ADMIN_EMAIL = "admin@lampfinance.com";

// Utilitário global para checar o tema salvo no navegador
export function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}