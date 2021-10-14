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
    let cell_index = 0;

    if(team=='home') {
        cell_index = inning;
    } else {
        cell_index = 9 + inning;
    }

    cells[cell_index].innerHTML = `<div class='inning'><p>${runs}</p></div>`;
}


/**
 *  Updates each team's run cell with the total number of runs scored by the team. 
 */
function updateRuns(){

}

/**
 * Returns the runs scored by team in inning. 
 * @param {string} team Options are home or away.
 * @param {number} inning Inning number 1 - 7 inclusive. 
 * @returns {number} The runs scored by team in inning. 
 */
function getInningValue(team, inning) {
    return 1;
}