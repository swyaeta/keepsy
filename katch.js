import { db, auth } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


const memoryList = document.getElementById("memorylist");


auth.onAuthStateChanged(async (user) => {

    if (!user) {
        memoryList.innerHTML = "<p>Please log in first.</p>";
        return;
    }

    const memoriesSnapshot = await getDocs(
        collection(db, "memories")
    );

    const memories = [];

    memoriesSnapshot.forEach((doc) => {

        const data = doc.data();

        if (data.userId === user.uid) {
            memories.push({
                id: doc.id,
                date: data.date,
                title: data.title,
                body: data.body
            });
        }

    });


    memories.sort((a, b) => {
        return a.date.localeCompare(b.date);
    });


    memories.forEach((memory) => {

        const memoryBox = document.createElement("div");

        memoryBox.className = "memory";

        memoryBox.innerHTML = `
            <h2>${memory.date}</h2>
            <p>${memory.title}</p>
        `;

        memoryList.appendChild(memoryBox);

    });

});