/*
==============================================================
SETI Companion
Aliens Page
Part 1 / 3
==============================================================
*/

const ALIEN_DATA = [
    {
        id: "EXERTIANS",
        title: "EXERTIANS",
        image: "assets/aliens/exertians.png",
        color: "#E84D5B",
        description:
            "Masters of engineering and large scale construction. Their signals often appear highly structured."
    },

    {
        id: "ANOMALIES",
        title: "ANOMALIES",
        image: "assets/aliens/anomalies.png",
        color: "#2F83C5",
        description:
            "Unknown phenomena that resist classification. Sometimes nature imitates intelligence."
    },

    {
        id: "MASCAMITES",
        title: "MASCAMITES",
        image: "assets/aliens/mascamites.png",
        color: "#D7B04A",
        description:
            "Ancient beings believed to preserve enormous libraries of astronomical knowledge."
    },

    {
        id: "AMOEBA",
        title: "AMOEBA",
        image: "assets/aliens/amoeba.png",
        color: "#D94D9A",
        description:
            "Primitive but adaptive lifeforms. Simple appearance, surprisingly complex behaviour."
    },

    {
        id: "CENTAURIANS",
        title: "CENTAURIANS",
        image: "assets/aliens/centaurians.png",
        color: "#2E9D7F",
        description:
            "A civilisation believed to originate from Alpha Centauri, famous for diplomatic contact."
    },

    {
        id: "ARKHOS",
        title: "ARKHOS",
        image: "assets/aliens/arkhos.png",
        color: "#607A95",
        description:
            "A machine civilisation whose transmissions resemble compressed mathematical proofs."
    },

    {
        id: "GLYPHIDS",
        title: "GLYPHIDS",
        image: "assets/aliens/glyphids.png",
        color: "#9AD92A",
        description:
            "Organic hive organisms communicating through repeating geometric patterns."
    },

    {
        id: "'OUMUAMUA",
        title: "'OUMUAMUA",
        image: "assets/aliens/oumuamua.png",
        color: "#7352A5",
        description:
            "An interstellar visitor whose true origin remains one of astronomy's greatest mysteries."
    }
];

/* ========================================================== */

let alienInitialized = false;

let alienBusy = false;

let currentWheelAngle = 0;

/* ========================================================== */

let aliensRoot;

let wheelSvg;

let spinButton;

let resultContainer;

/* ========================================================== */

function initAlienPage() {

    if (alienInitialized) {
        return;
    }

    aliensRoot = document.getElementById("aliens-root");

    aliensRoot.innerHTML = createAlienLayout();

    wheelSvg =
        document.getElementById("alien-wheel");

    spinButton =
        document.getElementById("alien-spin");

    resultContainer =
        document.getElementById("alien-result");

    buildAlienWheel();

    spinButton.addEventListener(
        "click",
        spinAlienWheel
    );

    alienInitialized = true;

}

/* ========================================================== */

function createAlienLayout() {

    return `

<div class="card">

    <h1 style="
        text-align:center;
        margin-bottom:24px;
        letter-spacing:2px;
    ">
        👽 FIRST CONTACT SCANNER
    </h1>

    <div
        style="
            display:flex;
            justify-content:center;
        "
    >

        <div
            style="
                position:relative;
                width:360px;
                height:360px;
            "
        >

            <div
                style="
                    position:absolute;
                    left:50%;
                    top:-20px;
                    transform:translateX(-50%);
                    width:0;
                    height:0;
                    border-left:16px solid transparent;
                    border-right:16px solid transparent;
                    border-top:30px solid white;
                    z-index:10;
                "
            ></div>

            <svg
                id="alien-wheel"
                width="360"
                height="360"
                viewBox="-180 -180 360 360"
                style="
                    overflow:visible;
                    transition:
                        transform
                        5s
                        cubic-bezier(.17,.67,.15,1);
                "
            >
            </svg>

        </div>

    </div>

    <div
        style="
            display:flex;
            justify-content:center;
            margin-top:24px;
        "
    >

        <button
            id="alien-spin"
            class="menu-button"
        >
            📡 INITIATE SCAN
        </button>

    </div>

    <div
        id="alien-result"
        style="
            margin-top:28px;
            text-align:center;
        "
    >

        👽👽👽👽👽👽👽👽

    </div>

</div>

`;

}

/* ========================================================== */

function polarPoint(angle, radius) {

    const radians =
        (angle - 90) *
        Math.PI /
        180;

    return {

        x:
            radius *
            Math.cos(radians),

        y:
            radius *
            Math.sin(radians)

    };

}
/*
==============================================================
Part 2 / 3
Wheel Builder + Spin Logic
==============================================================
*/

function buildAlienWheel() {

    const SVG_NS = "http://www.w3.org/2000/svg";

    const radius = 170;

    wheelSvg.innerHTML = "";

    ALIEN_DATA.forEach((alien, index) => {

        const startAngle = index * 45;
        const endAngle = startAngle + 45;

        const p1 = polarPoint(startAngle, radius);
        const p2 = polarPoint(endAngle, radius);

        const path = document.createElementNS(
            SVG_NS,
            "path"
        );

        path.setAttribute(
            "d",
            `
M0 0
L${p1.x} ${p1.y}
A ${radius} ${radius} 0 0 1 ${p2.x} ${p2.y}
Z`
        );

        path.setAttribute(
            "fill",
            alien.color
        );

        path.setAttribute(
            "stroke",
            "white"
        );

        path.setAttribute(
            "stroke-width",
            "2"
        );

        wheelSvg.appendChild(path);

        //--------------------------------------------------

        const middle = startAngle + 22.5;

        const labelPos = polarPoint(
            middle,
            102
        );

        const text =
            document.createElementNS(
                SVG_NS,
                "text"
            );

        text.setAttribute(
            "x",
            labelPos.x
        );

        text.setAttribute(
            "y",
            labelPos.y
        );

        text.setAttribute(
            "text-anchor",
            "middle"
        );

        text.setAttribute(
            "dominant-baseline",
            "middle"
        );

        text.setAttribute(
            "transform",
            `rotate(${middle},${labelPos.x},${labelPos.y})`
        );

        text.setAttribute(
            "font-size",
            "10"
        );

        text.setAttribute(
            "font-family",
            "Segoe UI"
        );

        text.setAttribute(
            "font-weight",
            "700"
        );

        text.setAttribute(
            "fill",
            "#222"
        );

        text.textContent =
            alien.title;

        wheelSvg.appendChild(text);

    });

}

/* ========================================================== */

function spinAlienWheel() {

    if (alienBusy) {
        return;
    }

    alienBusy = true;

    spinButton.disabled = true;

    resultContainer.innerHTML = "";

    //--------------------------------------------------

    let dots = 0;

    let interval;

    setTimeout(() => {

        spinButton.textContent =
            "📡 SCANNING";

        interval =
            setInterval(() => {

                dots =
                    (dots + 1) % 4;

                spinButton.textContent =
                    "📡 SCANNING SIGNAL" +
                    ".".repeat(dots);

            }, 300);

    }, 250);

    //--------------------------------------------------

    const randomBuffer =
        new Uint32Array(1);

    crypto.getRandomValues(
        randomBuffer
    );

    const winnerIndex =
        randomBuffer[0] %
        ALIEN_DATA.length;

    const winner =
        ALIEN_DATA[winnerIndex];

    //--------------------------------------------------

    const targetAngle =
        360 -
        (
            winnerIndex * 45 +
            22.5
        );

    const rotations =
        360 *
        (
            5 +
            Math.floor(
                Math.random() * 3
            )
        );

    const delta =
        (
            targetAngle -
            (
                currentWheelAngle % 360
            ) +
            360
        ) %
        360;

    currentWheelAngle +=
        rotations +
        delta;

    wheelSvg.style.transform =
        `rotate(${currentWheelAngle}deg)`;

    //--------------------------------------------------

    setTimeout(() => {

        clearInterval(
            interval
        );

        spinButton.textContent =
            "📶 SIGNAL LOCKED";

        setTimeout(() => {

            spinButton.textContent =
                "👽 FIRST CONTACT";

        }, 700);

        setTimeout(() => {

            spinButton.textContent =
                `👽 ${winner.title}`;

        }, 1500);

        showAlienResult(
            winner
        );

    }, 5000);

}
/*
==============================================================
Part 3 / 3
Result + Helpers
==============================================================
*/

function showAlienResult(alien) {

    setTimeout(() => {

        resultContainer.innerHTML = `

<div
    style="
        display:inline-block;
        padding:12px 28px;
        border-radius:18px;
        border:4px solid ${alien.color};
        background:${alien.color};
        color:white;
        font-size:38px;
        font-weight:900;
        letter-spacing:2px;
        animation:fadeIn .35s ease;
    "
>
    ${alien.title}
</div>

<div style="margin-top:22px">

    <img
        src="${alien.image}"
        alt="${alien.title}"
        style="
            width:min(320px,90vw);
            border-radius:18px;
            box-shadow:0 8px 28px rgba(0,0,0,.45);
            animation:fadeIn .35s ease;
        "
    >

</div>

<div
    style="
        margin-top:24px;
        font-size:1rem;
        line-height:1.7;
        max-width:700px;
        margin-left:auto;
        margin-right:auto;
        color:#f2f2f2;
    "
>
    ${alien.description}
</div>

`;

    }, 2400);

    //----------------------------------------------------------

    setTimeout(() => {

        spinButton.disabled = false;

        spinButton.textContent =
            "📡 INITIATE SCAN";

        alienBusy = false;

    }, 5000);

}

/*
==============================================================
Optional helper
==============================================================
*/

function getAlienById(id) {

    return ALIEN_DATA.find(
        alien => alien.id === id
    );

}

/*
==============================================================
Future expansion
==============================================================

Có thể bổ sung sau:

- Search alien
- Filter theo expansion
- Popup mô tả đầy đủ
- Probability mode
- History
- Favourite aliens
- Sound effects
- Dark scanner animation
- Encyclopedia

==============================================================
*/