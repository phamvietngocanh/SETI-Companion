/*
=========================================================
SETI Companion
Solar System Module
=========================================================
*/

let solarInitialized = false;

function initSolarPage() {

    if (solarInitialized) {
        return;
    }

    const root = document.getElementById("solar-content");

    root.innerHTML = `
        <div class="card">

            <h1>☀️ Solar System</h1>

            <p style="margin:20px 0;">
                Explore the official interactive Solar System
                created for SETI.
            </p>

            <iframe
                id="solar-frame"
                src="https://seti-solarsystem.czechgames.com/"
                title="SETI Solar System"
                style="
                    width:100%;
                    height:70vh;
                    border:none;
                    border-radius:16px;
                    background:#111;
                ">
            </iframe>

            <div
                id="solar-fallback"
                style="
                    display:none;
                    margin-top:24px;
                    text-align:center;
                ">

                <p style="margin-bottom:16px;">
                    Your browser doesn't allow the Solar System
                    to be embedded.
                </p>

                <button
                    id="openSolar"
                    class="menu-button">

                    🌐 Open Official Solar System

                </button>

            </div>

        </div>
    `;

    const iframe = document.getElementById("solar-frame");
    const fallback = document.getElementById("solar-fallback");

    /*
    -----------------------------------------------------
    Fallback

    Some websites prevent embedding with X-Frame-Options
    or Content-Security-Policy.

    If loading fails, show the fallback button.
    -----------------------------------------------------
    */

    const timeout = setTimeout(() => {

        try {

            iframe.contentWindow.location.href;

        } catch (e) {

            iframe.style.display = "none";
            fallback.style.display = "block";

        }

    }, 2500);

    iframe.onload = () => {

        clearTimeout(timeout);

    };

    document
        .getElementById("openSolar")
        ?.addEventListener("click", () => {

            window.open(
                "https://seti-solarsystem.czechgames.com/",
                "_blank"
            );

        });

    solarInitialized = true;

}