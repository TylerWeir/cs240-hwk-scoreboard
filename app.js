/**
 * Scoreboard Homework
 * @author Tyler Weir
 */

/**
 * Fills the specified innning with the specified number of runs.  
 * @param {string} team Options are home or away.
 * @param {number} inning Inning number 1 - 7 inclusive.
 * @param {number} runs The number of runs the team scored. 
 */
function fillInning(team, inning, runs) {
    let cells = document.querySelectorAll('td');
    let cell_index = inningToCellIndex(team, inning);
    cells[cell_index].innerHTML = `<div class='inning'><p>${runs}</p></div>`;
}

/**
 * Fills the run total with the specified number of runs.  
 * @param {string} team Options are home or away.
 * @param {number} runs The number of runs the team scored. 
 */
function fillRuns(team, runs) {
    let cells = document.querySelectorAll('td');
    let cell_index = inningToCellIndex(team, 8);
    cells[cell_index].innerHTML = `<div class='inning last'><p>${runs}</p></div>`;
}

/**
 *  Updates each team's run cell with the total number of runs scored by the team. 
 */
function updateRuns(){
    // First update the home team
    var runSum = 0;
    for (let i = 1; i < 8; i++) {
        runSum += getInningValue('home', i);
    }
    fillRuns('home', runSum);

    // First update the home team
    var runSum = 0;
    for (let i = 1; i < 8; i++) {
        runSum += getInningValue('away', i);
    }
    fillRuns('away', runSum);
}

/**
 * Returns the runs scored by team in inning. 
 * @param {string} team Options are home or away.
 * @param {number} inning Inning number 1 - 7 inclusive. 
 * @returns {number} The runs scored by team in inning. 
 */
function getInningValue(team, inning) {
    // Get the inning containers
    let cells = document.querySelectorAll('td');
    let cell_index = inningToCellIndex(team, inning);
    
    // Parse the inner html for the number of funs.
    let innerHTML = cells[cell_index].innerHTML
    
    if (innerHTML.includes('<p>')) {
        let runs = parseInt(innerHTML.match(/\d+/)[0])
        return runs;
    }

    return 0;
}

/**
 * Returns the index of the cell that represents the inning. 
 * @param {number} team Options are home or away.
 * @param {number} inning Inning number 1-7 inclusive.
 * @returns {number} The index of the cell the represents the inning. 
 */
function inningToCellIndex(team, inning) {
    // Go the right container
    if(team=='home') {
        return inning;
    } else {
        return 9 + inning;
    }
}

/**
 * Adds runs to the score board based on the options selected in the
 * the control panel.
 */
function addRun() {
    let team = document.getElementById("team-selector").value;
    let inning = parseInt(document.getElementById("inning-selector").value);

    let currentRuns = getInningValue(team, inning);
    fillInning(team, inning, currentRuns+1);
}

/**
 * Subtracts runs to the score board based on the options selected in the
 * the control panel.
 */
function minusRun() {
    let team = document.getElementById("team-selector").value;
    let inning = parseInt(document.getElementById("inning-selector").value);

    let currentRuns = getInningValue(team, inning);
    if(currentRuns > 0) {
        fillInning(team, inning, currentRuns-1);
    } else {
        fillInning(team, inning, 0);
    }
}

let sound1 = new Audio("sounds/buildup.mp3");
let sound2 = new Audio("sounds/charge1.mp3");
let sound3 = new Audio("sounds/charge2.mp3");
let chicken = new Audio("sounds/chickendance.mp3");

// Add EventListner to the add runs button.
document.getElementById("add-run").addEventListener("click", function() {
    addRun();
    updateRuns();
});

// Add EventListner to the minus runs button.
document.getElementById("minus-run").addEventListener("click", function() {
    minusRun();
    updateRuns();
});

// Add EventListner to the random sounds button.
document.getElementById("random-music").addEventListener("click", function() {
    document.getElementById("display-img").src = "images/megaphone.png"
    let num = Math.random();
    if (num < 0.33) {
        sound1.play();
    } else if (num > 0.66) {
        sound2.play();
    } else {
        sound3.play();
    }
});

// Add EventListner to the chicken dance button.
document.getElementById("chicken-dance").addEventListener("click", function(){
    chicken.play();
    document.getElementById("display-img").src = "images/sdchicken.jpg"
})
