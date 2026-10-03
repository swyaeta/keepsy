import { db, auth } from "./firebase.js";
import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


const params = new URLSearchParams(window.location.search);
const memoryId = params.get("id");

auth.onAuthStateChanged(async (user) => {

    if (!user) {
        document.getElementById("memory-body").textContent =
            "Please log in first.";
        return;
    }
    if (!memoryId) {
        document.getElementById("memory-body").textContent =
            "Memory not found.";
        return;
    }

    const memoryRef = doc(db, "memories", memoryId);
    const memorySnap = await getDoc(memoryRef);
    if (!memorySnap.exists()) {
        document.getElementById("memory-body").textContent =
            "Memory not found.";
        return;
    }

    const memory = memorySnap.data();
    if (memory.userId !== user.uid) {
        document.getElementById("memory-body").textContent =
            "You cannot view this memory.";
        return;
    }
    document.getElementById("memory-date").textContent =
        memory.date;

    document.getElementById("memory-title").textContent =
        memory.title;

    document.getElementById("memory-body").textContent =
        memory.body;
});

const musicPlayer = document.getElementById("musicplayer");

const soft = document.getElementById("soft");
const mood = document.getElementById("mood");
const cozy = document.getElementById("cozy");
const calm = document.getElementById("calm");
const beast = document.getElementById("beast");
const minimal = document.getElementById("minimal");


soft.addEventListener("click", () => {
    musicPlayer.src = "music/soft.mp3";
    musicPlayer.play();
});

mood.addEventListener("click", () => {
    musicPlayer.src = "music/mood.mp3";
    musicPlayer.play();
});

cozy.addEventListener("click", () => {
    musicPlayer.src = "music/cozy.mp3";
    musicPlayer.play();
});

calm.addEventListener("click", () => {
    musicPlayer.src = "music/calm.mp3";
    musicPlayer.play();
});

beast.addEventListener("click", () => {
    musicPlayer.src = "music/beast.mp3";
    musicPlayer.play();
});

minimal.addEventListener("click", () => {
    musicPlayer.src = "music/minimal.mp3";
    musicPlayer.play();
});