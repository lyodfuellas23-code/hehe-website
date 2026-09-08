/* =========================
   RESET
========================= */

 {
    box-sizing: border-box;
}

body {
    margin: 0;
    overflow: hidden;
}


/* =========================
   MAIN SCREEN
========================= */

.question-screen {
    position: relative;

    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    background:
        linear-gradient(
            to bottom,
            #f58fc0 0%,
            #f7a4ca 45%,
            #f29bc5 100%
        );

    color: white;
}


/* =========================
   SUBTLE PIXEL TEXTURE
========================= */

.question-screen::before {
    content: "";

    position: absolute;
    inset: 0;

    background-image:
        linear-gradient(
            45deg,
            rgba(255,255,255,0.08) 25%,
            transparent 25%
        ),
        linear-gradient(
            -45deg,
            rgba(255,255,255,0.08) 25%,
            transparent 25%
        );

    background-size: 8px 8px;

    opacity: 0.35;

    pointer-events: none;
}


/* =========================
   CONTENT
========================= */

.content {
    position: relative;

    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    margin-bottom: 80px;
}


/* =========================
   CAT FRAME
========================= */

.cat-frame {
    width: 170px;
    height: 170px;

    padding: 7px;

    margin-bottom: 35px;

    background: #ffb5d6;

    border: 4px solid #fff;

    border-radius: 14px;

    box-shadow:
        0 0 0 4px #c92c72,
        0 7px 0 #9c1f58;

    image-rendering: pixelated;
}


/* Inner black screen */

.cat-screen {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #17151b;

    border-radius: 7px;

    overflow: hidden;
}


/* =========================
   PLEADING CAT
========================= */

.cat {
    font-size: 75px;

    animation: plead 1.2s infinite ease-in-out;

    transform-origin: bottom center;
}


/* Cat moves like it's begging */

@keyframes plead {

    0% {
        transform: translateY(0) rotate(0deg);
    }

    25% {
        transform: translateY(-6px) rotate(-3deg);
    }

    50% {
        transform: translateY(0) rotate(0deg);
    }

    75% {
        transform: translateY(-6px) rotate(3deg);
    }

    100% {
        transform: translateY(0) rotate(0deg);
    }

}


/* =========================
   QUESTION
========================= */

h1 {
    margin: 0;

    font-family: "Press Start 2P", monospace;

    font-size: clamp(20px, 4vw, 34px);

    line-height: 1.7;

    color: #ffffff;

    text-shadow:
        3px 3px 0 #b51d59,
        -2px -2px 0 #d82d70,
        2px -2px 0 #d82d70,
        -2px 2px 0 #d82d70;

    image-rendering: pixelated;
}


/* =========================
   DIALOGUE
========================= */

#dialogue {
    min-height: 25px;

    margin: 18px 0 15px;

    font-family: "Press Start 2P", monospace;

    font-size: 10px;

    color: white;

    text-shadow: 2px 2px 0 #b51d59;
}


/* =========================
   BUTTONS
========================= */

.buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 14px;

    margin-top: 8px;
}


button {
    font-family: "Press Start 2P", monospace;

    cursor: pointer;

    border-radius: 9px;

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}


/* YES */

#yes-button {
    padding: 10px 15px;

    font-size: 12px;

    color: white;

    background: #e83d82;

    border: 3px solid white;

    box-shadow:
        0 0 0 3px #9d2058,
        0 5px 0 #8c194f;
}

#yes-button:hover {
    transform: translateY(-2px);
}


/* NO */

#no-button {
    padding: 10px 17px;

    font-size: 10px;

    color: #a82a5b;

    background: #ffd8e8;

    border: 2px solid #c72d6d;

    box-shadow: 0 3px 0 #a82259;
}

#no-button:hover {
    transform: translateY(-2px);
}


/* =========================
   SPARKLES
========================= */

.sparkle {
    position: absolute;

    font-size: 28px;

    color: white;

    opacity: 0.8;

    animation: sparkle 2s infinite ease-in-out;
}

.sparkle-1 {
    top: 15%;
    left: 8%;
}

.sparkle-2 {
    top: 25%;
    right: 13%;

    animation-delay: 0.5s;
}

.sparkle-3 {
    bottom: 35%;
    left: 15%;

    animation-delay: 1s;
}


@keyframes sparkle {

    0% {
        opacity: 0.3;
        transform: scale(0.8);
    }

    50% {
        opacity: 1;
        transform: scale(1.2);
    }

    100% {
        opacity: 0.3;
        transform: scale(0.8);
    }

}


/* =========================
   HEART
========================= */

.heart {
    position: absolute;

    top: 25%;
    left: 5%;

    font-size: 55px;

    color: white;

    text-shadow: 3px 3px 0 #d52b70;

    transform: rotate(-10deg);
}


/* =========================
   CLOUDS
========================= */

.cloud {
    position: absolute;

    width: 180px;
    height: 60px;

    background: #fff4fa;

    border-radius: 50%;

    opacity: 0.9;
}

.cloud::before,
.cloud::after {
    content: "";

    position: absolute;

    background: #fff4fa;

    border-radius: 50%;
}

.cloud::before {
    width: 80px;
    height: 80px;

    left: 25px;
    bottom: 10px;
}

.cloud::after {
    width: 100px;
    height: 100px;

    right: 20px;
    bottom: 5px;
}


.cloud-1 {
    top: 8%;
    right: -30px;
}

.cloud-2 {
    bottom: 25%;
    left: -50px;

    transform: scale(1.3);
}


/* =========================
   MOUNTAINS
========================= */

.mountains {
    position: absolute;

    bottom: 0;
    left: 0;

    width: 100%;
    height: 180px;

    background: #e66ca6;

    clip-path: polygon(
        0 70%,
        15% 40%,
        30% 65%,
        45% 30%,
        60% 65%,
        75% 35%,
        90% 65%,
        100% 45%,
        100% 100%,
        0 100%
    );

    opacity: 0.8;
}


/* =========================
   CITY
========================= */

.city {
    position: absolute;

    bottom: 75px;

    width: 100%;

    text-align: center;

    font-family: monospace;

    font-size: 45px;

    letter-spacing: 5px;

    color: #d24b8c;

    opacity: 0.8;
}


/* =========================
   GRASS / FLOWERS
========================= */

.grass {
    position: absolute;

    bottom: 12px;

    width: 100%;

    text-align: center;

    font-size: 24px;

    color: #c72d70;

    letter-spacing: 8px;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {

    .cat-frame {
        width: 140px;
        height: 140px;

        margin-bottom: 25px;
    }

    .cat {
        font-size: 60px;
    }

    h1 {
        font-size: 18px;
    }

    #dialogue {
        font-size: 8px;
    }

    .heart {
        font-size: 40px;
    }

    .cloud {
        transform: scale(0.7);
    }

}