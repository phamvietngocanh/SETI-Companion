/*
=========================================================
SETI Companion
Application Controller
=========================================================
*/

const pages = {
    home: document.getElementById("page-home"),
    solar: document.getElementById("page-solar"),
    goals: document.getElementById("page-goals"),
    aliens: document.getElementById("page-aliens")
};

/* ===================================================== */

function showPage(pageName) {

    Object.values(pages).forEach(page => {
        page.classList.remove("active");
    });

    pages[pageName].classList.add("active");

    switch (pageName) {

        case "solar":
            if (typeof initSolarPage === "function") {
                initSolarPage();
            }
            break;

        case "goals":
            if (typeof initGoalsPage === "function") {
                initGoalsPage();
            }
            break;

        case "aliens":
            if (typeof initAlienPage === "function") {
                initAlienPage();
            }
            break;

    }

}

/* ===================================================== */
/* HOME BUTTONS                                           */
/* ===================================================== */

document
    .getElementById("btnSolar")
    .addEventListener("click", () => {

        showPage("solar");

    });

document
    .getElementById("btnGoals")
    .addEventListener("click", () => {

        showPage("goals");

    });

document
    .getElementById("btnAliens")
    .addEventListener("click", () => {

        showPage("aliens");

    });

/* ===================================================== */
/* BACK BUTTONS                                           */
/* ===================================================== */

document
    .querySelectorAll(".back-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            showPage("home");

        });

    });

/* ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    showPage("home");

});
