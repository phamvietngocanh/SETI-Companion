function initFirstPlayerPage() {
const root = document.getElementById("firstplayer-root");
root.innerHTML = `
<div class="fp-container">
    <img
        id="fpImage"
        src="assets/first-player/firstplayer.jpeg"
        alt="First Player">
    <button
        id="launchButton"
        class="launch-button">
        🚀 Launch
    </button>
    <div id="fpResult">
        <div id="resultTitle">
            First Player
        </div>
        <div id="resultColor">
            -
        </div>
    </div>
</div>
`;
const players = [
    {
        text:"🟠 CAM",
        color:"#d98a00"
    },
    {
        text:"🟢 LỤC",
        color:"#2d9c43"
    },
    {
        text:"⚪ TRẮNG",
        color:"#eeeeee"
    },
    {
        text:"🟣 TÍM",
        color:"#8b4cff"
    }
];
const btn = document.getElementById("launchButton");
const result = document.getElementById("resultColor");
btn.onclick = () => {
    btn.disabled = true;
    btn.textContent = "Launching...";
    let i = 0;
    const timer = setInterval(() => {
        const p = players[Math.floor(Math.random()*4)];
        result.textContent = p.text;
        result.style.color = p.color;
        i++;
        if(i >= 8){
            clearInterval(timer);
            btn.disabled = false;
            btn.textContent = "🚀 Launch Again";
        }
    },100);
};
    
