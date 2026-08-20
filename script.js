/* =========================================
   BIRTHDAY WEBSITE - SCRIPT.JS
========================================= */


/* =========================================
   START BIRTHDAY
========================================= */

function startBirthday() {

    const opening =
        document.getElementById(
            "opening-screen"
        );


    if (opening) {

        opening.classList.add("hide");

    }


    const music =
        document.getElementById(
            "bg-music"
        );


    if (music) {

        music.volume = 0.5;


        music.play().catch(
            function () {

                console.log(
                    "Music needs user interaction."
                );

            }
        );

    }


    createConfetti();

    createHearts();

}



/* =========================================
   SCROLL
========================================= */

function scrollToSection(id) {

    const section =
        document.getElementById(id);


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}



/* =========================================
   LOVE CARD
========================================= */

function openCard(card) {

    if (!card) return;


    card.classList.toggle(
        "open"
    );

}



/* =========================================
   FINAL GIFT
========================================= */

function showFinalGift() {

    const secret =
        document.getElementById(
            "secret"
        );


    if (!secret) return;


    secret.classList.add(
        "show"
    );


    setTimeout(
        function () {

            secret.scrollIntoView({
                behavior: "smooth"
            });

        },
        100
    );


    createConfetti();

    createHearts();

}



/* =========================================
   OPEN LETTER
========================================= */

function openLetter() {

    const envelope =
        document.getElementById(
            "envelope"
        );


    if (!envelope) return;


    envelope.classList.toggle(
        "open"
    );


    if (
        envelope.classList.contains(
            "open"
        )
    ) {

        createConfetti();

        createHearts();

    }

}



/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const amount = 80;


    for (
        let i = 0;
        i < amount;
        i++
    ) {


        const confetti =
            document.createElement(
                "div"
            );


        confetti.className =
            "confetti";


        confetti.style.left =
            Math.random() * 100 +
            "vw";


        confetti.style.animationDuration =
            2 +
            Math.random() * 3 +
            "s";


        confetti.style.animationDelay =
            Math.random() * 1.5 +
            "s";


        document.body.appendChild(
            confetti
        );


        setTimeout(
            function () {

                confetti.remove();

            },
            6000
        );

    }

}



/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts() {

    const amount = 15;


    for (
        let i = 0;
        i < amount;
        i++
    ) {


        const heart =
            document.createElement(
                "div"
            );


        heart.className =
            "floating-heart";


        heart.innerHTML =
            "❤️";


        heart.style.left =
            Math.random() * 100 +
            "vw";


        heart.style.animationDuration =
            3 +
            Math.random() * 3 +
            "s";


        heart.style.animationDelay =
            Math.random() * 2 +
            "s";


        document.body.appendChild(
            heart
        );


        setTimeout(
            function () {

                heart.remove();

            },
            7000
        );

    }

}



/* =========================================
   PAGE LOADED
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Birthday website loaded ❤️"
        );

    }
);
/* =========================================
   PASSWORD
========================================= */

const correctPassword = "ayang gweh";


function checkPassword() {

    const input =
        document.getElementById(
            "password-input"
        );

    const passwordScreen =
        document.getElementById(
            "password-screen"
        );

    const error =
        document.getElementById(
            "password-error"
        );


    if (!input || !passwordScreen) {
        return;
    }


    if (
        input.value ===
        correctPassword
    ) {

        error.textContent =
            "Password benar ❤️";


        passwordScreen.classList.add(
            "hide"
        );


        setTimeout(
            function () {

                passwordScreen.style.display =
                    "none";

            },
            800
        );


        /*
         * Confetti dan hearts hanya
         * dijalankan kalau fungsi tersebut
         * memang sudah ada di script kamu.
         */

        if (
            typeof createConfetti ===
            "function"
        ) {

            createConfetti();

        }


        if (
            typeof createHearts ===
            "function"
        ) {

            createHearts();

        }


    } else {

        error.textContent =
            "Password salah, coba lagi ya ❤️";


        input.value = "";


        input.focus();

    }

}


/* =========================================
   ENTER UNTUK UNLOCK
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const input =
            document.getElementById(
                "password-input"
            );


        if (input) {

            input.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key ===
                        "Enter"
                    ) {

                        checkPassword();

                    }

                }
            );

        }

    }
);