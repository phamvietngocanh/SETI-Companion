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