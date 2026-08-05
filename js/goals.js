/*
==============================================================
SETI Companion
Goals Page
Part 1 / 2
==============================================================
*/
/* ========================================================== */
/* GOAL DATA                                                  */
/* ========================================================== */
const GOAL_GROUPS = [
    [
        "assets/goals/1_1.png",
        "assets/goals/1_2.png"
    ],
    [
        "assets/goals/2_1.png",
        "assets/goals/2_2.png"
    ],
    [
        "assets/goals/3_1.png",
        "assets/goals/3_2.png"
    ],
    [
        "assets/goals/4_1.png",
        "assets/goals/4_2.png"
    ]
];
/* ========================================================== */
let goalsInitialized = false;
let goalsRoot;
let goalsGrid;
let generateButton;
/* ========================================================== */
function initGoalsPage(){
    if(goalsInitialized){
        return;
    }
    goalsRoot =
        document.getElementById(
            "goals-root"
        );
    goalsRoot.innerHTML =
        createGoalsLayout();
    goalsGrid =
        document.getElementById(
            "goals-grid"
        );
    generateButton =
        document.getElementById(
            "goals-generate"
        );
    generateButton.addEventListener(
        "click",
        generateGoals
    );
    //------------------------------------------------------
    showDefaultGoals();
    //------------------------------------------------------
    goalsInitialized = true;
}
/* ========================================================== */
function createGoalsLayout(){
    return `
<div class="goals-page">
    <div class="goals-container">
        <div
            id="goals-grid"
            class="goals-grid"
        >
        </div>
        <button
            id="goals-generate"
            class="menu-button goals-button"
        >
            🎯 Generate Goals
        </button>
    </div>
</div>
`;
}
/* ========================================================== */
function showDefaultGoals(){
    goalsGrid.innerHTML = "";
    GOAL_GROUPS.forEach(group => {
        const image =
            document.createElement(
                "img"
            );
        image.className =
            "goal-tile";
        image.src =
            group[0];
        image.alt =
            "Goal Tile";
        goalsGrid.appendChild(
            image
        );
    });
}
/*
==============================================================
SETI Companion
Goals Page
Part 2 / 2
==============================================================
*/
/* ========================================================== */
function generateGoals(){
    generateButton.disabled = true;
    generateButton.textContent =
        "🎯 Generating...";
    //------------------------------------------------------
    let flash = 0;
    const animation =
        setInterval(() => {
            goalsGrid.innerHTML = "";
            GOAL_GROUPS.forEach(group => {

                const image =
                    document.createElement(
                        "img"
                    );
                image.className =
                    "goal-tile";
                image.src =
                    group[
                        Math.floor(
                            Math.random() * 2
                        )
                    ];
                image.alt =
                    "Goal Tile";
                goalsGrid.appendChild(
                    image
                );
            });
            flash++;
            if(flash >= 8){
                clearInterval(
                    animation
                );
                showRandomGoals();
            }
        },100);
}
/* ========================================================== */
function showRandomGoals(){
    goalsGrid.innerHTML = "";
    GOAL_GROUPS.forEach(group => {
        const side =
            Math.floor(
                Math.random() * 2
            );
        const image =
            document.createElement(
                "img"
            );
        image.className =
            "goal-tile";
        image.src =
            group[side];
        image.alt =
            "Goal Tile";
        goalsGrid.appendChild(
            image
        );
    });
    //------------------------------------------------------
    generateButton.disabled = false;
    generateButton.textContent =
        "🎯 Generate Goals";
}
