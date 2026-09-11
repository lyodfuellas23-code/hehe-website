const yesButton = document.getElementById("yes-button");

const noButton = document.getElementById("no-button");

const noContainer =
    document.querySelector(".no-container");

const dialogue =
    document.getElementById("dialogue");

const buttons =
    document.querySelector(".buttons");


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


noButton.addEventListener(
    "click",
    function () {

        noClicks++;


        if (noClicks < 9) {

            dialogue.textContent =
                messages[noClicks - 1];

        }


        const newSize =
            Math.min(
                1 + (noClicks * 0.15),
                2.35
            );


        if (noClicks < 5) {

            yesButton.style.transform =
                `scale(${newSize})`;

            return;

        }


        if (noClicks === 5) {

            const buttonsRect =
                buttons.getBoundingClientRect();

            const yesRect =
                yesButton.getBoundingClientRect();

            const noRect =
                noContainer.getBoundingClientRect();


            buttons.style.width =
                `${buttonsRect.width}px`;

            buttons.style.height =
                `${buttonsRect.height}px`;


            const currentScale =
                newSize - 0.15;


            const buttonWidth =
                yesButton.offsetWidth;

            const buttonHeight =
                yesButton.offsetHeight;


            const fixedLeft =
                yesRect.left -
                (
                    buttonWidth *
                    (1 - currentScale) /
                    2
                );


            const fixedTop =
                yesRect.top -
                (
                    buttonHeight *
                    (1 - currentScale) /
                    2
                );


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


            yesButton.getBoundingClientRect();


            yesButton.style.transition =
                "transform 2.5s ease-in-out, left 2.5s ease-in-out, top 2.5s ease-in-out";


            yesButton.style.transform =
                `scale(${newSize})`;


            const scaledYesRect =
                yesButton.getBoundingClientRect();


            const targetYesLeft =
                (window.innerWidth / 2) -
                (scaledYesRect.width / 2);


            const targetYesTop =
                window.innerHeight * 0.65;


            requestAnimationFrame(
                function () {

                    yesButton.style.left =
                        `${targetYesLeft}px`;

                    yesButton.style.top =
                        `${targetYesTop}px`;

                }
            );


            noContainer.style.position =
                "fixed";

            noContainer.style.left =
                `${noRect.left}px`;

            noContainer.style.top =
                `${noRect.top}px`;


            moveNoButton();

            return;

        }


        if (
            noClicks >= 6 &&
            noClicks < 9
        ) {

            yesButton.style.transform =
                `scale(${newSize})`;

            moveNoButton();

            return;

        }


        if (noClicks === 9) {

            yesButton.style.transform =
                `scale(${newSize})`;


            const currentDialogueRect =
                dialogue.getBoundingClientRect();


            const yesRect =
                yesButton.getBoundingClientRect();


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


            finalDialogue.style.left =
                `${currentDialogueRect.left}px`;

            finalDialogue.style.top =
                `${currentDialogueRect.top}px`;


            document.body.appendChild(
                finalDialogue
            );


            dialogue.style.visibility =
                "hidden";


            const finalDialogueLeft =
                yesRect.left +
                (yesRect.width / 2) -
                (currentDialogueRect.width / 2);


            const finalDialogueTop =
                yesRect.bottom + 18;


            requestAnimationFrame(
                function () {

                    finalDialogue.style.transition =
                        "left 2.5s ease-in-out, top 2.5s ease-in-out";


                    finalDialogue.style.left =
                        `${finalDialogueLeft}px`;

                    finalDialogue.style.top =
                        `${finalDialogueTop}px`;


                    noContainer.style.transition =
                        "transform 2.5s ease-in-out";


                    noContainer.style.transform =
                        "translateX(120vw)";

                }
            );


            noButton.style.pointerEvents =
                "none";


            return;

        }

    }
);


yesButton.addEventListener(
    "click",
    function () {

        dialogue.textContent =
            "YAY!!! 🎉💗 You said yes!!! 🥹";

        yesButton.textContent =
            "YAY!!! 💗";

    }
);