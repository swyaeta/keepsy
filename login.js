import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("login-error");
const forgot = document.getElementById("forgot-password");


form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        window.location.href = "kapture.html";
    } catch {
        error.textContent = "Incorrect email or password.";
    }
});


forgot.addEventListener("click", async (e) => {
    e.preventDefault();

    try {
        await sendPasswordResetEmail(auth, email.value);
        error.textContent = "Reset link sent! Check your email.";
    } catch {
        error.textContent = "Enter a valid email.";
    }
});