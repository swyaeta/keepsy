import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";


const firebaseConfig = {
    apiKey: "",
    authDomain: "keepsy-9daf6.firebaseapp.com",
    projectId: "keepsy-9daf6",
    storageBucket: "keepsy-9daf6.firebasestorage.app",
    messagingSenderId: "202099771927",
    appId: "1:202099771927:web:64c32f5d0aa5566e08aa52"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { onAuthStateChanged }; 
