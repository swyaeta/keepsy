import { auth, onAuthStateChanged } from "./firebase.js";

const kaptureBox = document.getElementById("kapture-box");
const katchBox = document.getElementById("katch-box");

let currentUser = null;

onAuthStateChanged(auth, (user) => {
    currentUser = user;
});
kaptureBox.addEventListener("click", () => {
    if (currentUser) {
        window.location.href = "kapture.html";
    } else {
        window.location.href = "login.html";
    }
});

katchBox.addEventListener("click", () => {
    if (currentUser) {
        window.location.href = "katch.html";
    } else {
        window.location.href = "login.html";
    }
});