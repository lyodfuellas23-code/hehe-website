const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const noContainer = document.querySelector(".no-container");
const dialogue = document.getElementById("dialogue");
const buttons = document.querySelector(".buttons");

let noClicks = 0;

const messages = [
    "Are you sure? 🥺",
    "Really? You don't want to? 😭",
    "Please reconsider... 👉👈",
    "I'll even let you pick where we go 🥹",
    "You're breaking my heart 💔",
    "Pleaseee? Just give me a chance 😭",
    "Think about it... 🥺👉👈",
    "Okay this is getting painful 😭",
    "You really want to say no...? 💔"
];


function moveNoButton() {

    const buttonWidth =
        noContainer.offsetWidth;

    const buttonHeight =
        noContainer.offsetHeight;

    const minX =
        window.innerWidth * 0.55;

    const maxX =
        window.innerWidth -
        buttonWidth -
        30;

    const minY =
        window.innerHeight * 0.58;

    const maxY =
        window.innerHeight -
        buttonHeight -
        80;

    const randomX =
        minX +
        Math.random() *
        Math.max(maxX - minX, 20);

    const randomY =
        minY +
        Math.random() *
        Math.max(maxY - minY, 20);

    noContainer.style.left =
        `${randomX}px`;

    noContainer.style.top =
        `${randomY}px`;
}


noButton.addEventListener("click", function () {

    noClicks++;


    /*
     * Update dialogue
     */

    if (noClicks < 9) {

        dialogue.textContent =
            messages[noClicks - 1];
    }


    /*
     * YES GETS BIGGER EVERY CLICK
     */

    const newSize =
        Math.min(
            1 + (noClicks * 0.15),
            2.35
        );


    /*
     * CLICKS 1–4
     *
     * Just make YES bigger.
     */

    if (noClicks < 5) {

        yesButton.style.transform =
            `scale(${newSize})`;

        return;
    }


    /*
     * CLICK 5
     *
     * Freeze YES without teleporting.
     */

    if (noClicks === 5) {

        const buttonsRect =
            buttons.getBoundingClientRect();

        const yesRect =
            yesButton.getBoundingClientRect();

        const noRect =
            noContainer.getBoundingClientRect();


        /*
         * Freeze the buttons area.
         */

        buttons.style.width =
            `${buttonsRect.width}px`;

        buttons.style.height =
            `${buttonsRect.height}px`;


        /*
         * YES IS ALREADY SCALED FROM CLICKS 1–4.
         *
         * Calculate its current scale.
         */

        const currentScale =
            newSize - 0.15;


        /*
         * Get the button's original,
         * unscaled dimensions.
         */

        const buttonWidth =
            yesButton.offsetWidth;

        const buttonHeight =
            yesButton.offsetHeight;


        /*
         * Calculate the CSS left/top needed
         * to preserve its EXACT visual position.
         */

        const fixedLeft =
            yesRect.left -
            (buttonWidth * (1 - currentScale) / 2);

        const fixedTop =
            yesRect.top -
            (buttonHeight * (1 - currentScale) / 2);


        /*
         * Turn OFF transitions while freezing.
         * This prevents a tiny jump.
         */

        yesButton.style.transition =
            "none";

        yesButton.style.position =
            "fixed";

        yesButton.style.left =
            `${fixedLeft}px`;

        yesButton.style.top =
            `${fixedTop}px`;

        yesButton.style.transform =
            `scale(${currentScale})`;


        /*
         * Force the browser to apply the
         * frozen position immediately.
         */

        yesButton.getBoundingClientRect();


        /*
         * Now restore the smooth animation.
         */

        yesButton.style.transition =
            "transform 2.5s ease-in-out, left 2.5s ease-in-out, top 2.5s ease-in-out";


        /*
         * Make YES bigger for click 5.
         */

        yesButton.style.transform =
            `scale(${newSize})`;


        /*
         * Get the new scaled dimensions.
         */

        const scaledYesRect =
            yesButton.getBoundingClientRect();


        /*
         * Target = horizontally centered,
         * lower on the screen.
         */

        const targetYesLeft =
            (window.innerWidth / 2) -
            (scaledYesRect.width / 2);

        const targetYesTop =
            window.innerHeight * 0.65;


        /*
         * Move YES slowly.
         */

        requestAnimationFrame(function () {

            yesButton.style.left =
                `${targetYesLeft}px`;

            yesButton.style.top =
                `${targetYesTop}px`;

        });


        /*
         * Freeze NO exactly where it is.
         */

        noContainer.style.position =
            "fixed";

        noContainer.style.left =
            `${noRect.left}px`;

        noContainer.style.top =
            `${noRect.top}px`;


        /*
         * Move NO to its first random position.
         */

        moveNoButton();

        return;
    }


    /*
     * CLICKS 6–8
     *
     * YES continues growing.
     * NO keeps moving.
     */

    if (noClicks >= 6 && noClicks < 9) {

        yesButton.style.transform =
            `scale(${newSize})`;

        moveNoButton();

        return;
    }


    /*
     * CLICK 9
     *
     * NO slides away.
     * FINAL DIALOGUE slides underneath YES.
     */

    if (noClicks === 9) {

        /*
         * Final YES size.
         */

        yesButton.style.transform =
            `scale(${newSize})`;


        /*
         * Get the current dialogue position.
         */

        const currentDialogueRect =
            dialogue.getBoundingClientRect();


        /*
         * Get YES's current position.
         */

        const yesRect =
            yesButton.getBoundingClientRect();


        /*
         * Create a separate final dialogue.
         */

        const finalDialogue =
            document.createElement("p");

        finalDialogue.textContent =
            "I guess there's no other choice now. 😌💗";

        finalDialogue.style.position =
            "fixed";

        finalDialogue.style.zIndex =
            "100";

        finalDialogue.style.width =
            "230px";

        finalDialogue.style.margin =
            "0";

        finalDialogue.style.fontFamily =
            '"Press Start 2P", monospace';

        finalDialogue.style.fontSize =
            "10px";

        finalDialogue.style.lineHeight =
            "1.8";

        finalDialogue.style.color =
            "white";

        finalDialogue.style.textAlign =
            "center";

        finalDialogue.style.textShadow =
            "2px 2px 0 #b51d59";

        finalDialogue.style.pointerEvents =
            "none";


        /*
         * Start at the current dialogue position.
         */

        finalDialogue.style.left =
            `${currentDialogueRect.left}px`;

        finalDialogue.style.top =
            `${currentDialogueRect.top}px`;


        document.body.appendChild(
            finalDialogue
        );


        /*
         * Hide the original dialogue.
         */

        dialogue.style.visibility =
            "hidden";


        /*
         * Calculate the destination underneath YES.
         */

        const finalDialogueLeft =
            yesRect.left +
            (yesRect.width / 2) -
            (currentDialogueRect.width / 2);

        const finalDialogueTop =
            yesRect.bottom + 18;


        /*
         * START BOTH ANIMATIONS AT THE SAME TIME.
         */

        requestAnimationFrame(function () {

            /*
             * Dialogue moves underneath YES.
             */

            finalDialogue.style.transition =
                "left 2.5s ease-in-out, top 2.5s ease-in-out";

            finalDialogue.style.left =
                `${finalDialogueLeft}px`;

            finalDialogue.style.top =
                `${finalDialogueTop}px`;


            /*
             * NO slides away from EXACTLY
             * where it currently is.
             */

            noContainer.style.transition =
                "transform 2.5s ease-in-out";

            noContainer.style.transform =
                "translateX(120vw)";

        });


        /*
         * Disable NO.
         */

        noButton.style.pointerEvents =
            "none";

        return;
    }

});


/*
 * YES BUTTON
 */

yesButton.addEventListener("click", function () {

    dialogue.textContent =
        "YAY!!! 🎉💗 You said yes!!! 🥹";

    yesButton.textContent =
        "YAY!!! 💗";
});