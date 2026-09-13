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
   GIF SETTINGS
======================================== */

const gifRestartTime =
    3000;


/*
 * Keeps track of the currently active
 * GIF restart timer.
 */

let gifRestartTimer =
    null;


/* ========================================
   NO DIALOGUES
======================================== */

const noMessages = [

    "Bawal mag no 😛",

    "Bawal ngani HAHAHA 😂",

    "Tatanda ka dalaga nyan 😏",

    "Ayaw mo humabol sa pasko? 🥺",

    "Last na lang talaga... paki-click na lang yung No as your final answer 😭",

    "Okay I understand, thank you pa rin for hearing me out. I hope we can still be friends. ❤️"

];


/* ========================================
   INITIAL STICKER
======================================== */

const initialSticker =
    "assets/nervouscat.gif";


/* ========================================
   NO STICKERS
======================================== */

const noStickers = [

    "assets/blehcat.gif",

    "assets/laughingcat.gif",

    "assets/smirkcat.gif",

    "assets/pleadingcat.gif",

    "assets/cryingcat.gif",

    "assets/finalcat.gif"

];


/* ========================================
   YES STICKER
======================================== */

const yesSticker =
    "assets/kiligcat.gif";


/* ========================================
   INITIAL STATE
======================================== */

questionScreen.style.visibility =
    "hidden";


/* ========================================
   STOP GIF LOOP
======================================== */

function stopGifLoop() {

    if (
        gifRestartTimer !== null
    ) {

        clearInterval(
            gifRestartTimer
        );

        gifRestartTimer =
            null;

    }

}


/* ========================================
   START GIF LOOP
======================================== */

function startGifLoop(
    stickerImage,
    stickerPath
) {

    /*
     * Stop any previous GIF timer.
     */

    stopGifLoop();


    /*
     * Only create a restart loop
     * if the sticker is a GIF.
     */

    if (
        !stickerPath
            .toLowerCase()
            .endsWith(".gif")
    ) {

        return;

    }


    /*
     * Restart the GIF automatically.
     */

    gifRestartTimer =
        setInterval(
            function () {

                /*
                 * Add a timestamp so the browser
                 * treats it as a fresh image.
                 */

                stickerImage.src =
                    stickerPath +
                    "?restart=" +
                    Date.now();

            },
            gifRestartTime
        );

}


/* ========================================
   CHANGE STICKER
======================================== */

function changeSticker(
    newSticker
) {

    /*
     * Stop the previous GIF loop.
     */

    stopGifLoop();


    /*
     * Fade out the current sticker.
     */

    cat.style.opacity =
        "0";

    cat.style.transform =
        "scale(0.7)";


    setTimeout(
        function () {

            /*
             * Remove the old sticker.
             */

            cat.innerHTML =
                "";


            /*
             * Create a new image.
             */

            const stickerImage =
                document.createElement("img");


            stickerImage.src =
                newSticker;


            stickerImage.alt =
                "";


            stickerImage.classList.add(
                "sticker"
            );


            /*
             * Put the image inside
             * the cat screen.
             */

            cat.appendChild(
                stickerImage
            );


            /*
             * Show the new sticker.
             */

            cat.style.opacity =
                "1";

            cat.style.transform =
                "scale(1.15)";


            /*
             * Start the automatic GIF
             * restart system if needed.
             */

            startGifLoop(
                stickerImage,
                newSticker
            );


            /*
             * Return the sticker to
             * its normal size.
             */

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


                /*
                 * Show the nervous cat
                 * when the question screen
                 * first appears.
                 */

                changeSticker(
                    initialSticker
                );

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
   NO BUTTON
======================================== */

noButton.addEventListener(
    "click",
    function () {

        /*
         * Stop the button from doing
         * anything after the final NO.
         */

        if (
            noClicks >= 6
        ) {

            return;

        }


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
             * YES grows after every NO.
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
                    70,
                    -25
                );

            }


            /*
             * CLICK 2
             */

            if (
                noClicks === 2
            ) {

                moveNoButton(
                    -60,
                    60
                );

            }


            /*
             * CLICK 3
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
             */

            if (
                noClicks === 5
            ) {

                moveNoButton(
                    260,
                    -5
                );

            }

        }


        /* =================================
           CLICK 6
        ================================= */

        if (
            noClicks === 6
        ) {

            /*
             * Final dialogue.
             */

            dialogue.textContent =
                noMessages[5];


            /*
             * Final sticker.
             */

            changeSticker(
                noStickers[5]
            );


            /*
             * Keep the dialogue the SAME
             * size as the other NO messages.
             */

            dialogue.style.fontSize =
                "";

            dialogue.style.width =
                "";


            /*
             * Move NO back beside YES.
             */

            moveNoButton(
                90,
                0
            );


            /*
             * Keep YES at its grown size.
             */

            yesButton.style.transform =
                "scale(1.75)";


            /*
             * Disable BOTH buttons.
             *
             * YES remains visible but cannot
             * be clicked anymore.
             */

            yesButton.disabled =
                true;

            noButton.disabled =
                true;

        }

    }
);


/* ========================================
   YES BUTTON
======================================== */

yesButton.addEventListener(
    "click",
    function () {

        /*
         * Do nothing if YES has already
         * been disabled.
         */

        if (
            yesButton.disabled
        ) {

            return;

        }


        /*
         * Change the cat.
         */

        changeSticker(
            yesSticker
        );


        /*
         * Change the dialogue.
         */

        dialogue.textContent =
            "Legit ba? HAHA thank you for giving me a chance. Hindi naman natin kailangan magmadali. Let’s get to know each other more muna :)";


        /*
         * MOVE THE DIALOGUE INTO THE
         * YES CONTAINER.
         */

        yesContainer.appendChild(
            dialogue
        );


        /*
         * Make the dialogue position
         * itself relative to YES.
         */

        dialogue.style.position =
            "absolute";

        dialogue.style.left =
            "50%";

        dialogue.style.top =
            "calc(100% + 25px)";

        dialogue.style.width =
            "330px";

        dialogue.style.margin =
            "0";

        dialogue.style.transform =
            "translateX(-50%)";


        /*
         * Change YES text.
         */

        yesButton.textContent =
            "YAY!!! 💗";


        /*
         * Make YES slightly larger.
         */

        yesButton.style.transform =
            "scale(1.15)";


        /*
         * Disable BOTH buttons.
         */

        yesButton.disabled =
            true;

        noButton.disabled =
            true;


        /*
         * Make NO look disabled.
         */

        noButton.style.opacity =
            "0.5";

    }
);