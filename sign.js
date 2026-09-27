import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const form = document.getElementById("sign-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("sign-error");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        window.location.href = "kapture.html";
    } catch {
        error.textContent = "Could not create ur account.";
    }
});