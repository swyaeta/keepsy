import { db, auth } from "./firebase.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// to save the memory
const saveButton = document.getElementById("savebutton");
saveButton.addEventListener("click", async () => {

    const date = document.getElementById("date").value;
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
    console.log("CURRENT USER:", auth.currentUser);

    // checking if user is logged in
    if (!auth.currentUser) {
        alert("You need to be logged in first.");
        return;
    }
    try {
        await addDoc(collection(db, "memories"), {
            userId: auth.currentUser.uid,
            date: date,
            title: title,
            body: body
        });

        alert("Your memory has been saved ♡");

    } catch (error) {

        console.error("SAVE ERROR:", error);
        alert("Could not save your memory!!!! try again.");

    }
});

// music
const musicPlayer = document.getElementById("musicplayer");

const soft = document.getElementById("soft");
const mood = document.getElementById("mood");
const cozy = document.getElementById("cozy");
const calm = document.getElementById("calm");
const beast = document.getElementById("beast");

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