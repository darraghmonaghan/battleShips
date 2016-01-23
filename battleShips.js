
var prompt = require('prompt');

// below grid is used for comparison purposes, helping determine a winner
var cleanGrid = [['-','A','B','C','D','E','F','G','H','I','J'],
					['1','-','-','-','-','-','-','-','-','-','-'],
					['2','-','-','-','-','-','-','-','-','-','-'],
					['3','-','-','-','-','-','-','-','-','-','-'],
					['4','-','-','-','-','-','-','-','-','-','-'],
					['5','-','-','-','-','-','-','-','-','-','-'],
					['6','-','-','-','-','-','-','-','-','-','-'],
					['7','-','-','-','-','-','-','-','-','-','-'],
					['8','-','-','-','-','-','-','-','-','-','-'],
					['9','-','-','-','-','-','-','-','-','-','-'],
					['10','-','-','-','-','-','-','-','-','-','-']];

//////////////////////////  PLAYER GRIDS  /////////////////////////////

// Grid where the Players boats will be placed
var playerGrid = [['-','A','B','C','D','E','F','G','H','I','J'],
					['1','-','-','-','-','-','-','-','-','-','-'],
					['2','-','-','-','-','-','-','-','-','-','-'],
					['3','-','-','-','-','-','-','-','-','-','-'],
					['4','-','-','-','-','-','-','-','-','-','-'],
					['5','-','-','-','-','-','-','-','-','-','-'],
					['6','-','-','-','-','-','-','-','-','-','-'],
					['7','-','-','-','-','-','-','-','-','-','-'],
					['8','-','-','-','-','-','-','-','-','-','-'],
					['9','-','-','-','-','-','-','-','-','-','-'],
					['10','-','-','-','-','-','-','-','-','-','-']];

// Grid where the Players fired missiles will be recorded
var playerFired = [['-','A','B','C','D','E','F','G','H','I','J'],
					['1','-','-','-','-','-','-','-','-','-','-'],
					['2','-','-','-','-','-','-','-','-','-','-'],
					['3','-','-','-','-','-','-','-','-','-','-'],
					['4','-','-','-','-','-','-','-','-','-','-'],
					['5','-','-','-','-','-','-','-','-','-','-'],
					['6','-','-','-','-','-','-','-','-','-','-'],
					['7','-','-','-','-','-','-','-','-','-','-'],
					['8','-','-','-','-','-','-','-','-','-','-'],
					['9','-','-','-','-','-','-','-','-','-','-'],
					['10','-','-','-','-','-','-','-','-','-','-']];

//////////////////////////  COMPUTER GRIDS  /////////////////////////////

// Grid where the Computers boats will be placed
var computerGrid = [['-','A','B','C','D','E','F','G','H','I','J'],
					['1','-','-','-','-','-','-','-','-','-','-'],
					['2','-','-','-','-','-','-','-','-','-','-'],
					['3','-','-','-','-','-','-','-','-','-','-'],
					['4','-','-','-','-','-','-','-','-','-','-'],
					['5','-','-','-','-','-','-','-','-','-','-'],
					['6','-','-','-','-','-','-','-','-','-','-'],
					['7','-','-','-','-','-','-','-','-','-','-'],
					['8','-','-','-','-','-','-','-','-','-','-'],
					['9','-','-','-','-','-','-','-','-','-','-'],
					['10','-','-','-','-','-','-','-','-','-','-']];

// Grid where the Computers fired missiles will be recorded
var computerFired = [['-','A','B','C','D','E','F','G','H','I','J'],
					['1','-','-','-','-','-','-','-','-','-','-'],
					['2','-','-','-','-','-','-','-','-','-','-'],
					['3','-','-','-','-','-','-','-','-','-','-'],
					['4','-','-','-','-','-','-','-','-','-','-'],
					['5','-','-','-','-','-','-','-','-','-','-'],
					['6','-','-','-','-','-','-','-','-','-','-'],
					['7','-','-','-','-','-','-','-','-','-','-'],
					['8','-','-','-','-','-','-','-','-','-','-'],
					['9','-','-','-','-','-','-','-','-','-','-'],
					['10','-','-','-','-','-','-','-','-','-','-']];					


///////////////////// Component 1: SETTING COMPUTERS & PlAYERS BOAT POSITIONING ////////////////////////

function setComputerGrid() {
	var sizeOfShip = [4,4,5];
	var computer = 'computer';
	for (q = 0; q < sizeOfShip.length; q++) {		
		horizontalOrVertical(sizeOfShip[q], computer);		
	}
}

function setPlayerGrid() {
	var sizeOfShip = [4,4,5];
	var player = 'player';
	for (l = 0; l < sizeOfShip.length; l++) {		
		horizontalOrVertical(sizeOfShip[l], player);		
	}
}

function horizontalOrVertical(sizeOfShip, entity) {
	randomNumber = Math.random();

	if (randomNumber < 0.5) {
		placeVertical(sizeOfShip, entity);
	} else if (randomNumber > 0.5) {
		placeHorizontal(sizeOfShip, entity);
	}
}

function placeVertical(sizeOfShip, entity) {							// edge cases - boats are overlapped / overwritten
	var sizeOfShip = sizeOfShip;
	var computerOrPlayer = entity;
	var verticalAxis = Math.round((Math.random() * 5) + 1);				// plus one to ensure the A-J or 1-10 labels
	var horizontalAxis = Math.round((Math.random() * 9) + 1);			// plus one to ensure the A-J or 1-10 labels

	var verticalAxis1 = (verticalAxis + 1);
	var verticalAxis2 = (verticalAxis + 2);
	var verticalAxis3 = (verticalAxis + 3);
	var verticalAxis4 = (verticalAxis + 4);

	if (computerOrPlayer === 'computer') {
			if (sizeOfShip === 4) {
				computerGrid[verticalAxis][horizontalAxis] = '';
				computerGrid[verticalAxis1][horizontalAxis] = '';
				computerGrid[verticalAxis2][horizontalAxis] = '';
				computerGrid[verticalAxis3][horizontalAxis] = '';						
			} else if (sizeOfShip === 5) {
				computerGrid[verticalAxis][horizontalAxis] = '';
				computerGrid[verticalAxis1][horizontalAxis] = '';
				computerGrid[verticalAxis2][horizontalAxis] = '';
				computerGrid[verticalAxis3][horizontalAxis] = '';				
				computerGrid[verticalAxis4][horizontalAxis] = '';
			}
	} else if (computerOrPlayer === 'player') {
			if (sizeOfShip === 4) {
				playerGrid[verticalAxis][horizontalAxis] = '';
				playerGrid[verticalAxis1][horizontalAxis] = '';
				playerGrid[verticalAxis2][horizontalAxis] = '';
				playerGrid[verticalAxis3][horizontalAxis] = '';						
			} else if (sizeOfShip === 5) {
				playerGrid[verticalAxis][horizontalAxis] = '';
				playerGrid[verticalAxis1][horizontalAxis] = '';
				playerGrid[verticalAxis2][horizontalAxis] = '';
				playerGrid[verticalAxis3][horizontalAxis] = '';				
				playerGrid[verticalAxis4][horizontalAxis] = '';
			}
	}
}

function placeHorizontal(sizeOfShip, entity) {								// edge cases - boats are overlapped / overwritten
	var sizeOfShip = sizeOfShip;
	var computerOrPlayer = entity;
	var verticalAxis = Math.round((Math.random() * 9));
	var horizontalAxis = Math.round((Math.random() * 5));

	var horizontalAxis1 = (horizontalAxis + 1);
	var horizontalAxis2 = (horizontalAxis + 2);
	var horizontalAxis3 = (horizontalAxis + 3);
	var horizontalAxis4 = (horizontalAxis + 4);


	if (computerOrPlayer === 'computer') {
		if (sizeOfShip === 4) {
			computerGrid[verticalAxis][horizontalAxis] = '';
			computerGrid[verticalAxis][horizontalAxis1] = '';				
			computerGrid[verticalAxis][horizontalAxis2] = '';
			computerGrid[verticalAxis][horizontalAxis3] = '';
		} else if (sizeOfShip === 5) {
			computerGrid[verticalAxis][horizontalAxis] = '';
			computerGrid[verticalAxis][horizontalAxis1] = '';
			computerGrid[verticalAxis][horizontalAxis2] = '';
			computerGrid[verticalAxis][horizontalAxis3] = '';
			computerGrid[verticalAxis][horizontalAxis4] = '';					
		}
	} else if (computerOrPlayer === 'player') {
		if (sizeOfShip === 4) {
			playerGrid[verticalAxis][horizontalAxis] = '';
			playerGrid[verticalAxis][horizontalAxis1] = '';				
			playerGrid[verticalAxis][horizontalAxis2] = '';
			playerGrid[verticalAxis][horizontalAxis3] = '';
		} else if (sizeOfShip === 5) {
			playerGrid[verticalAxis][horizontalAxis] = '';
			playerGrid[verticalAxis][horizontalAxis1] = '';
			playerGrid[verticalAxis][horizontalAxis2] = '';
			playerGrid[verticalAxis][horizontalAxis3] = '';
			playerGrid[verticalAxis][horizontalAxis4] = '';					
		}		
	}
}


//////////////////// Component 2: DETERMINING WINNER  //////////////////////////////////

var playerShotsFired = 1;				// Starting at 1 to override computer counting
var playerShotsHit = 1;

var computerShotsFired = 1;
var computerShotsHit = 1;


function winnerIsPlayer() {
	if (JSON.stringify(computerGrid) === JSON.stringify(cleanGrid)) {
		console.log('You Won! Congratulations, you rule the 7 Seas!');
		gameStatistics();	
	} else {
		userInput();
	}
}


function winnerIsComputer() {
	if (JSON.stringify(playerGrid) === JSON.stringify(cleanGrid)) {
		console.log('You Lost, the computer sank all your ships.');
		gameStatistics();
	} else {
		computerFireMissile();
	}
}

function gameStatistics() {
	var playerAccuracy = Math.round((playerShotsHit / playerShotsFired)*100);
	var computerAccuracy = Math.round((computerShotsHit / computerShotsFired)*100);

	console.log('Game Statistics:');
	console.log('No. of Missiles you fired: ' + playerShotsFired + ', Accuracy: ' + playerAccuracy + '%');
	console.log('No. of Missiles the enemy fired: ' + computerShotsFired + ', Accuracy: ' + computerAccuracy + '%');
}

///////////////// Component 3: USER FIRING MISSILES //////////////////

function userInput() {
	console.log('Coordinates of previous missile attempts:');
	console.log(playerFired);

	console.log('computer grid below:')										// REMOVE WHEN MOVING TO PRODUCTION //
	console.log(computerGrid);

	prompt.start();
	console.log('Select the coordinates you would like to fire at, (A-J & 1-10, e.g. F8)');
	prompt.get(['coordinates'], function (err, result) {

	// userFireMissile(result.coordinates);

		var xAxis = result.coordinates[0];

		if (result.coordinates[2] !== undefined) {									// Required for naming purposes in Command Line interface
			var combine = ('' + result.coordinates[1] + result.coordinates[2]);		// EDGE CASE - if a double digit coordinate is entered, e.g. B10
			var yAxis = parseInt(combine);
		} else {
			var yAxis = parseInt(result.coordinates[1]);
		}

		var xAxisConverted = convertLetterToInteger(result.coordinates[0]);			// Converting the xAxis letter to number for use in array

		if (xAxisConverted === false || yAxis > 10) {								// Ensuring valid user input
			console.log('invalid entry, please select a letter from A-J, and a digit 1-10, e.g. F8');
			userInput();
		} else {
			userFireMissile(xAxis, yAxis, xAxisConverted);		
		}
	})
}

function userFireMissile(xAxis, yAxis, xAxisConverted) {
	
	// var xAxis = coordinates[0];											
	
	// if (coordinates[2] !== undefined) {
	// 	var combine = ('' + coordinates[1] + coordinates[2]);			
	// 	var yAxis = parseInt(combine);
	// } else {
	// 	var yAxis = parseInt(coordinates[1]);		
	// }

	// var xAxisConverted = convertLetterToInteger(coordinates[0]);		

	console.log('-------------------------')
	console.log('Missile being fired at: ' + xAxis + yAxis);

	if (computerGrid[yAxis][xAxisConverted] === '') {
		console.log('HIT! Successful missile strike!');
		updateComputerGrid(yAxis, xAxisConverted);
		successfulAttempts(yAxis, xAxisConverted);
		playerShotsHit++;
		winnerIsPlayer();
	} else {
		console.log('Miss. Missile missed target, Captain.');
		missedAttempts(yAxis, xAxisConverted);
		computerFireMissile();
	}
	playerShotsFired++;
}

function successfulAttempts(xAxis, yAxis) {
	playerFired[xAxis][yAxis] = '✔';
}

function missedAttempts(xAxis, yAxis) {
	playerFired[xAxis][yAxis] = '✕';
}

function updateComputerGrid(xAxis, yAxis) {
	computerGrid[xAxis][yAxis] = '-';
}


//////////////////////////////  Component 4: Computer Missile Firing  /////////////////////////////////////// 

function computerFireMissile() {

	var xAxis = Math.round((Math.random() * 9) + 1);
	var yAxis = Math.round((Math.random() * 9) + 1);

	console.log('------------------------------');
	console.log('Captain, enemy missile fired!');

	if (computerFired[xAxis][yAxis] === 'F') {							// If a missile has already been fired at this coordinate, retarget
		computerFireMissile();

	} else if (playerGrid[xAxis][yAxis] === "") {
		console.log('Captain, fleet vessel suffered a direct hit');
		playerGrid[xAxis][yAxis] = "-";
		computerFired[xAxis][yAxis] = 'F';
		computerShotsHit++;
		winnerIsComputer();

	} else {
		console.log("Enemy missile missed, landed in the water.");
		computerFired[xAxis][yAxis] = 'F';
		userInput();
	}
	computerShotsFired++;
}


///////////////// Component ???: SUPPORT FUNCTIONS //////////////////

function convertLetterToInteger(input) {					// convert letter(A-J) to number(0-9) and return
	var letter = input.toUpperCase();

	if (letter === 'A') {
		return 1;
	} else if (letter === 'B') {
		return 2;
	} else if (letter === 'C') {
		return 3;
	} else if (letter === 'D') {
		return 4;
	} else if (letter === 'E') {
		return 5;
	} else if (letter === 'F') {
		return 6;
	} else if (letter === 'G') {
		return 7;
	} else if (letter === 'H') {
		return 8;
	} else if (letter === 'I') {
		return 9;
	} else if (letter === 'J') {
		return 10;
	} else {
		return false;
	}
}



// CALLING THE GAME START //

function startGame() {
	setComputerGrid();
	setPlayerGrid();
	userInput();
}


startGame();

// convertLetterToInteger('Z');





