
// =========================
// GET HTML ELEMENTS
// =========================

const questionScreen = document.getElementById("question-screen");
const yesScreen = document.getElementById("yes-screen");
const dateScreen = document.getElementById("date-screen");
const activityScreen = document.getElementById("activity-screen");
const finalScreen = document.getElementById("final-screen");

const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

const dialogue = document.getElementById("dialogue");

const continueButton = document.getElementById("continue-button");
const dateContinueButton = document.getElementById("date-continue-button");
const activityContinueButton = document.getElementById("activity-continue-button");

const dateInput = document.getElementById("date-input");

const activities = document.querySelectorAll(".activity");

const finalDate = document.getElementById("final-date");
const finalActivity = document.getElementById("final-activity");


// =========================
// NO BUTTON
// =========================

let noClicks = 0;

const messages = [
    "Are you sure? 🥺",
    "Really? You don't want to? 😭",
    "Please reconsider... 👉👈",
    "I'll even let you pick where we go 🥹",
    "You're breaking my heart 💔",
    "Okay... you're making this difficult 😭"
];

noButton.addEventListener("click", function () {

    noClicks++;

    // Change the dialogue
    if (noClicks <= messages.length) {
        dialogue.textContent = messages[noClicks - 1];
    }

    // Make YES bigger
    const newSize = 1 + (noClicks * 0.25);

    yesButton.style.transform = `scale(${newSize})`;

    // Eventually make NO run away
    if (noClicks >= 6) {

        noButton.style.position = "absolute";

        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    // Eventually remove NO
    if (noClicks >= 9) {

        noButton.style.display = "none";

        dialogue.textContent = "Okay... I guess you only have one choice now 😌💗";
    }
});


// =========================
// YES BUTTON
// =========================

yesButton.addEventListener("click", function () {

    questionScreen.classList.add("hidden");

    yesScreen.classList.remove("hidden");

});


// =========================
// CONTINUE TO DATE
// =========================

continueButton.addEventListener("click", function () {

    yesScreen.classList.add("hidden");

    dateScreen.classList.remove("hidden");

});


// =========================
// DATE INPUT
// =========================

dateContinueButton.addEventListener("click", function () {

    if (dateInput.value === "") {

        alert("Please pick a date first! 🥺");

        return;
    }

    dateScreen.classList.add("hidden");

    activityScreen.classList.remove("hidden");

});


// =========================
// ACTIVITY SELECTION
// =========================

let selectedActivity = "";

activities.forEach(function (activity) {

    activity.addEventListener("click", function () {

        // Remove selected class from everything
        activities.forEach(function (item) {
            item.classList.remove("selected");
        });

        // Select this activity
        activity.classList.add("selected");

        selectedActivity = activity.textContent.trim();

    });

});


// =========================
// CONTINUE TO FINAL SCREEN
// =========================

activityContinueButton.addEventListener("click", function () {

    if (selectedActivity === "") {

        alert("Pick something for our date first! 🥺");

        return;
    }

    // Convert date to a nicer format
    const date = new Date(dateInput.value + "T00:00:00");

    const formattedDate = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    finalDate.textContent = `📅 ${formattedDate}`;

    finalActivity.textContent = `💕 ${selectedActivity}`;

    activityScreen.classList.add("hidden");

    finalScreen.classList.remove("hidden");

});
