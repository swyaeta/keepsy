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

const music = document.getElementById("music");
const musicSelect = document.getElementById("music-select");
const musicButton = document.getElementById("music-button");

musicSelect.addEventListener("change", () => {
    music.src = musicSelect.value;
});

musicButton.addEventListener("click", () => {
    if (music.paused) {

        music.play();
        musicButton.textContent = "❚❚ Pause";
    } else {
        music.pause();
        musicButton.textContent = "▶ Play";
    }
});
