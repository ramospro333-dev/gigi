
document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const envelopeScene = document.getElementById("envelopeScene");

    const startButton = document.getElementById("startButton");
    const envelopeButton = document.getElementById("envelopeButton");
    const birthdayLetter = document.getElementById("birthdayLetter");

    const clickHint = document.getElementById("clickHint");
    const replayButton = document.getElementById("replayButton");

    // Primera transición: introducción al sobre
    startButton.addEventListener("click", () => {
        intro.classList.add("fade-out");

        window.setTimeout(() => {
            intro.classList.add("hidden");
            intro.classList.remove("fade-out");

            envelopeScene.classList.remove("hidden");
            envelopeScene.classList.add("fade-in");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 600);
    });

    // Abrir el sobre y revelar la carta
    envelopeButton.addEventListener("click", () => {
        if (envelopeButton.classList.contains("opened")) {
            return;
        }

        envelopeButton.classList.add("opened");
        envelopeButton.setAttribute("aria-expanded", "true");

        clickHint.textContent = "رسالة صغيرة من القلب ♡";

        // Dar tiempo a la animación de apertura
        window.setTimeout(() => {
            birthdayLetter.classList.remove("hidden");

            clickHint.classList.add("hidden");

            birthdayLetter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 700);
    });

    // Reiniciar la experiencia
    replayButton.addEventListener("click", () => {
        birthdayLetter.classList.add("hidden");

        envelopeButton.classList.remove("opened");
        envelopeButton.setAttribute("aria-expanded", "false");

        clickHint.classList.remove("hidden");
        clickHint.textContent = "اضغطي على الظرف لفتح الرسالة";

        envelopeScene.classList.remove("fade-in");
        envelopeScene.classList.add("hidden");

        intro.classList.remove("hidden");
        intro.classList.add("fade-in");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
