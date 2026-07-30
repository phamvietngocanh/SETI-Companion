function initFirstPlayerPage() {

    const root = document.getElementById("firstplayer-root");

    root.innerHTML = `
<div class="fp-container">

    <div class="fp-image-wrapper">

        <img
            id="fpImage"
            src="assets/first-player/firstplayer.jpeg"
            alt="First Player">

        <div id="selector"></div>

        <img
            id="crown"
            src="assets/first-player/number-1.png"
            alt="Winner">

    </div>

    <button
        id="launchButton"
        class="launch-button">

        🚀 Launch

    </button>

</div>
`;
}
const crownPositions = [

    { left: 11, top: 68 }, // Cam
    { left: 35, top: 68 }, // Xanh
    { left: 59, top: 68 }, // Trắng
    { left: 82, top: 68 }  // Tím

];
const crown = document.getElementById("crown");
const button = document.getElementById("launchButton");

button.disabled = true;
button.textContent = "Launching...";

crown.style.opacity = 0;

setTimeout(() => {

    const winner = Math.floor(Math.random() * 4);

    crown.style.left = crownPositions[winner].left + "%";
    crown.style.top  = crownPositions[winner].top  + "%";

    crown.style.opacity = 1;

    button.disabled = false;
    button.textContent = "🚀 Launch Again";

}, 1000);