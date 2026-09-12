const introScreen =
    document.getElementById("intro-screen");

const introContent =
    document.querySelector(".intro-content");

const continueButton =
    document.getElementById("continue-button");

const cloudTransition =
    document.getElementById("cloud-transition");

const questionScreen =
    document.getElementById("question-screen");


const yesButton =
    document.getElementById("yes-button");

const noButton =
    document.getElementById("no-button");

const noContainer =
    document.getElementById("no-container");

const yesContainer =
    document.getElementById("yes-container");

const dialogue =
    document.getElementById("dialogue");

const cat =
    document.getElementById("cat");


let noClicks =
    0;


/* ========================================
   NO DIALOGUES
======================================== */

const noMessages = [

    "Sure ka ba diyan? 🥺",

    "Sige ka, tatanda ka dalaga niyan 😏",

    "Ayaw mo humabol sa Pasko? 😂",

    "Borta ba talaga gusto mo? 😭",

    "Last na lang talaga... paki-click na lang yung No ulit as your final decision 🥺"

];


/* ========================================
   TEMPORARY STICKERS
======================================== */

const noStickers = [

    "😳",

    "😏",

    "😂",

    "😭",

    "🥺",

    "💀"

];


const yesSticker =
    "😽";


/* ========================================
   INITIAL STATE
======================================== */

questionScreen.style.visibility =
    "hidden";


/* ========================================
   CHANGE STICKER
======================================== */

function changeSticker(
    newSticker
) {

    cat.style.opacity =
        "0";

    cat.style.transform =
        "scale(0.7)";


    setTimeout(
        function () {

            cat.textContent =
                newSticker;

            cat.style.opacity =
                "1";

            cat.style.transform =
                "scale(1.15)";


            setTimeout(
                function () {

                    cat.style.transform =
                        "scale(1)";

                },
                150
            );

        },
        120
    );

}


/* ========================================
   CONTINUE BUTTON
======================================== */

continueButton.addEventListener(
    "click",
    function () {

        continueButton.disabled =
            true;


        introContent.style.opacity =
            "0";


        setTimeout(
            function () {

                cloudTransition.classList.add(
                    "active"
                );

            },
            500
        );


        setTimeout(
            function () {

                questionScreen.style.visibility =
                    "visible";

            },
            1700
        );


        setTimeout(
            function () {

                cloudTransition.classList.add(
                    "reveal"
                );

            },
            2200
        );


        setTimeout(
            function () {

                introScreen.style.display =
                    "none";

            },
            3000
        );


        setTimeout(
            function () {

                cloudTransition.classList.remove(
                    "active"
                );

                cloudTransition.classList.remove(
                    "reveal"
                );

            },
            5000
        );

    }
);


/* ========================================
   MOVE NO BUTTON
======================================== */

function moveNoButton(
    x,
    y
) {

    noContainer.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* ========================================
   GET CURRENT CENTER
======================================== */

function getElementCenterX(
    element
) {

    const rect =
        element.getBoundingClientRect();

    return (
        rect.left +
        rect.width / 2
    );

}


/* ========================================
   FINAL CLICK
======================================== */

function startFinalSequence() {

    /*
     * =====================================
     * RECORD CURRENT VISUAL POSITIONS
     * =====================================
     *
     * We capture these BEFORE changing
     * anything.
     */

    const noRect =
        noContainer.getBoundingClientRect();

    const yesRect =
        yesButton.getBoundingClientRect();

    const dialogueRect =
        dialogue.getBoundingClientRect();


    /*
     * =====================================
     * NO
     * =====================================
     *
     * IMPORTANT:
     *
     * We do NOT change NO's positioning.
     *
     * We keep its click-5 transform:
     *
     * translate(285px, 90px)
     *
     * and simply animate that transform
     * farther to the right.
     *
     * Therefore there is no teleport.
     */

    noContainer.classList.add(
        "final-runaway"
    );


    /*
     * =====================================
     * DIALOGUE
     * =====================================
     *
     * Convert dialogue to fixed positioning
     * AFTER capturing its current position.
     */

    dialogue.classList.add(
        "final-dialogue"
    );


    dialogue.style.left =
        `${dialogueRect.left}px`;

    dialogue.style.top =
        `${dialogueRect.top}px`;

    dialogue.style.width =
        `${dialogueRect.width}px`;


    /*
     * Force the browser to render the
     * dialogue at its current position.
     */

    dialogue.offsetHeight;


    /*
     * =====================================
     * CHANGE FINAL DIALOGUE
     * =====================================
     */

    dialogue.textContent =
        "Heh, paano ’yan? Wala ka nang choice kundi Yes lang 😏";


    /*
     * =====================================
     * YES
     * =====================================
     *
     * YES currently has the scale from
     * click 5.
     *
     * We calculate how far its CENTER needs
     * to travel to reach the screen center.
     */

    const currentYesCenterX =
        yesRect.left +
        (
            yesRect.width / 2
        );


    const screenCenterX =
        window.innerWidth / 2;


    const yesMoveX =
        screenCenterX -
        currentYesCenterX;


    /*
     * The question is above the buttons.
     *
     * Instead of moving YES upward, we move
     * it slightly DOWN while centering it.
     *
     * This prevents the enlarged YES button
     * from touching the question.
     */

    const yesMoveY =
        55;


    yesContainer.classList.add(
        "final-yes"
    );


    /*
     * =====================================
     * DIALOGUE TARGET
     * =====================================
     *
     * Place the dialogue underneath the
     * FINAL YES position.
     */

    const finalYesWidth =
        yesRect.width * (
            1.9 / 1.75
        );


    const finalYesCenter =
        screenCenterX;


    const dialogueWidth =
        window.innerWidth <= 600
            ? 250
            : 330;


    const dialogueTargetX =
        finalYesCenter -
        (
            dialogueWidth / 2
        );


    /*
     * YES moves down by 55px.
     *
     * Dialogue goes underneath it.
     */

    const dialogueTargetY =
        yesRect.top +
        yesRect.height +
        55 +
        30;


    /*
     * =====================================
     * FORCE INITIAL STATES
     * =====================================
     */

    void yesContainer.offsetWidth;
    void noContainer.offsetWidth;
    void dialogue.offsetWidth;


    /*
     * =====================================
     * START EVERYTHING TOGETHER
     * =====================================
     */

    requestAnimationFrame(
        function () {


            /*
             * YES:
             *
             * Keep its current scale from
             * click 5 and translate it.
             */

            yesContainer.style.transform =
                `translate(${yesMoveX}px, ${yesMoveY}px)`;


            /*
             * DIALOGUE:
             *
             * Slide underneath YES.
             */

            dialogue.style.left =
                `${dialogueTargetX}px`;

            dialogue.style.top =
                `${dialogueTargetY}px`;


            /*
             * NO:
             *
             * Current transform is:
             *
             * translate(285px, 90px)
             *
             * We add enough X movement to
             * send it completely off screen.
             */

            const extraNoMovement =
                window.innerWidth -
                noRect.left +
                250;


            noContainer.style.transform =
                `translate(${285 + extraNoMovement}px, 90px)`;

        }
    );

}


/* ========================================
   NO BUTTON
======================================== */

noButton.addEventListener(
    "click",
    function () {

        noClicks++;


        /* =================================
           CLICKS 1–5
        ================================= */

        if (
            noClicks >= 1 &&
            noClicks <= 5
        ) {

            dialogue.textContent =
                noMessages[
                    noClicks - 1
                ];


            changeSticker(
                noStickers[
                    noClicks - 1
                ]
            );


            /*
             * YES grows but stays in place.
             */

            const newSize =
                Math.min(
                    1 + (
                        noClicks *
                        0.15
                    ),
                    1.75
                );


            yesButton.style.transform =
                `scale(${newSize})`;


            /*
             * CLICK 1
             */

            if (
                noClicks === 1
            ) {

                moveNoButton(
                    0,
                    0
                );

            }


            /*
             * CLICK 2
             */

            if (
                noClicks === 2
            ) {

                moveNoButton(
                    0,
                    0
                );

            }


            /*
             * CLICK 3
             * RIGHT + DOWN
             */

            if (
                noClicks === 3
            ) {

                moveNoButton(
                    100,
                    90
                );

            }


            /*
             * CLICK 4
             * RIGHT + UP
             */

            if (
                noClicks === 4
            ) {

                moveNoButton(
                    190,
                    25
                );

            }


            /*
             * CLICK 5
             * RIGHT + DOWN
             */

            if (
                noClicks === 5
            ) {

                moveNoButton(
                    285,
                    90
                );

            }

        }


        /* =================================
           6TH CLICK
        ================================= */

        if (
            noClicks === 6
        ) {

            noButton.disabled =
                true;


            changeSticker(
                noStickers[5]
            );


            startFinalSequence();

        }

    }
);


/* ========================================
   YES BUTTON
======================================== */

yesButton.addEventListener(
    "click",
    function () {

        changeSticker(
            yesSticker
        );


        dialogue.textContent =
            "Legit ba? HAHA thank you for giving me a chance. Hindi naman natin kailangan magmadali. Let’s get to know each other more muna :)";


        dialogue.style.position =
            "fixed";

        dialogue.style.left =
            "50%";

        dialogue.style.top =
            "calc(50% + 120px)";

        dialogue.style.width =
            "330px";

        dialogue.style.margin =
            "0";

        dialogue.style.transform =
            "translateX(-50%)";


        yesButton.textContent =
            "YAY!!! 💗";


        yesButton.style.transform =
            "scale(1.15)";


        yesButton.disabled =
            true;


        noButton.disabled =
            true;


        noButton.style.opacity =
            "0.5";

    }
);