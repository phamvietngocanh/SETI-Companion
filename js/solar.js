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

    const root = document.getElementById("solar-root");

    root.innerHTML = `
    <iframe
        id="solar-frame"
        src="https://seti-solarsystem.czechgames.com/"
        title="SETI Solar System">
    </iframe>

    <div
        id="solar-fallback"
        style="
            display:none;
            width:100%;
            height:100dvh;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            text-align:center;
            padding:24px;
        ">

        <p style="margin-bottom:20px;">
            Your browser doesn't allow the Solar System to be embedded.
        </p>

        <button
            id="openSolar"
            class="menu-button">
            🌐 Open Official Solar System
        </button>

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
