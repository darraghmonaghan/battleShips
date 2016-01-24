
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
var player = [['-','A','B','C','D','E','F','G','H','I','J'],
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
var computer = [['-','A','B','C','D','E','F','G','H','I','J'],
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

function setGrid(entity) {
	var sizeOfShip = [4,4,5];
	// var computer = 'computer';
	for (q = 0; q < sizeOfShip.length; q++) {		
		horizontalOrVertical(sizeOfShip[q], entity);		
	}
}

function horizontalOrVertical(sizeOfShip, entity) {						// randomly determines whether boat is place horizontally or vertically
	randomNumber = Math.random();

	if (randomNumber < 0.5) {
		placeVertical(sizeOfShip, entity);
	} else if (randomNumber > 0.5) {
		placeHorizontal(sizeOfShip, entity);
	}
}

function placeVertical(sizeOfShip, entity) {							// Determines the coordinates of vertically placed boats
	var sizeOfShip = sizeOfShip;
	var horizontalAxis = randomLongNumber();
	var verticalAxis = randomShortNumber();

	var verticalAxis1 = (verticalAxis + 1);
	var verticalAxis2 = (verticalAxis + 2);
	var verticalAxis3 = (verticalAxis + 3);
	var verticalAxis4 = (verticalAxis + 4);

	if ((eval(entity)[verticalAxis][horizontalAxis]) && (eval(entity)[verticalAxis1][horizontalAxis]) && (eval(entity)[verticalAxis2][horizontalAxis]) && (eval(entity)[verticalAxis3][horizontalAxis]) === '-') {		// ensures that boats are not overlapped //
		if (sizeOfShip === 4) {
			eval(entity)[verticalAxis][horizontalAxis] = '';			
			eval(entity)[verticalAxis1][horizontalAxis] = '';
			eval(entity)[verticalAxis2][horizontalAxis] = '';
			eval(entity)[verticalAxis3][horizontalAxis] = '';
		} else if (sizeOfShip === 5) {
			eval(entity)[verticalAxis][horizontalAxis] = '';
			eval(entity)[verticalAxis1][horizontalAxis] = '';
			eval(entity)[verticalAxis2][horizontalAxis] = '';
			eval(entity)[verticalAxis3][horizontalAxis] = '';				
			eval(entity)[verticalAxis4][horizontalAxis] = '';
		}			
	} else {
		placeVertical(sizeOfShip, entity);								// if boats are overlapped, then the random placement function will be run again
	}
}


function placeHorizontal(sizeOfShip, entity) {							// Determines the coordinates of horizontally placed boats				
	var sizeOfShip = sizeOfShip;
	var verticalAxis = randomLongNumber();
	var horizontalAxis = randomShortNumber();

	var horizontalAxis1 = (horizontalAxis + 1);
	var horizontalAxis2 = (horizontalAxis + 2);
	var horizontalAxis3 = (horizontalAxis + 3);
	var horizontalAxis4 = (horizontalAxis + 4);

	if ((eval(entity)[verticalAxis][horizontalAxis]) && (eval(entity)[verticalAxis][horizontalAxis1]) && (eval(entity)[verticalAxis][horizontalAxis2])  && (eval(entity)[verticalAxis][horizontalAxis3]) === '-') {			// ensures that boats are not overlapped //
		if (sizeOfShip === 4) {
			eval(entity)[verticalAxis][horizontalAxis] = '';
			eval(entity)[verticalAxis][horizontalAxis1] = '';				
			eval(entity)[verticalAxis][horizontalAxis2] = '';
			eval(entity)[verticalAxis][horizontalAxis3] = '';
		} else if (sizeOfShip === 5) {
			eval(entity)[verticalAxis][horizontalAxis] = '';
			eval(entity)[verticalAxis][horizontalAxis1] = '';
			eval(entity)[verticalAxis][horizontalAxis2] = '';
			eval(entity)[verticalAxis][horizontalAxis3] = '';
			eval(entity)[verticalAxis][horizontalAxis4] = '';		
		}	
	} else {
		placeHorizontal(sizeOfShip, entity);				// if boats are overlapped, then the random placement function will be run again
	}
}


//////////////////// Component 2: DETERMINING WINNER  //////////////////////////////////

var playerShotsFired = 0;				// Counter is started at 1 to Starting at 1 to override computer counting
var playerShotsHit = 0;
var computerShotsFired = 0;
var computerShotsHit = 0;


function checkWinner(entity) {
	var checkGrid = (entity === 'player' ? 'computer' : 'player');					// ternary opearator to determine which grid to check against clean grid

	if (JSON.stringify(eval(checkGrid)) === JSON.stringify(cleanGrid)) {
		console.log('--------------------------------------');
		console.log(entity + ' wins!');
		gameStatistics();
	} else {
		if (entity === 'player') {
			userInput();
		} else if (entity === 'computer') {
			computerFireMissile();
		}
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
	console.log('--------------------------------------');
	console.log('Coordinates of previous missile attempts:');
	console.log(playerFired);

	console.log('computer grid below:')										// REMOVE WHEN MOVING TO PRODUCTION //
	console.log(computer);

	prompt.start();
	console.log('Select the coordinates you would like to fire at, (A-J & 1-10, e.g. F8)');
	prompt.get(['coordinates'], function (err, result) {

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
		
	console.log('--------------------------------------');
	console.log('Missile being fired at: ' + xAxis + yAxis);

	if (computer[yAxis][xAxisConverted] === '') {
		console.log('HIT! Successful missile strike!');
		updateComputerGrid(yAxis, xAxisConverted);
		successfulAttempts(yAxis, xAxisConverted);
		playerShotsHit++;
		playerShotsFired++;
		checkWinner('player');
	} else {
		console.log('Miss. Missile missed target, Captain.');
		missedAttempts(yAxis, xAxisConverted);
		computerFireMissile();
		playerShotsFired++;
	}
}

function successfulAttempts(xAxis, yAxis) {
	playerFired[xAxis][yAxis] = '✔';
}

function missedAttempts(xAxis, yAxis) {
	playerFired[xAxis][yAxis] = '✕';
}

function updateComputerGrid(xAxis, yAxis) {
	computer[xAxis][yAxis] = '-';
}


//////////////////////////////  Component 4: Computer Missile Firing  /////////////////////////////////////// 

function computerFireMissile() {

	var xAxis = randomLongNumber();
	var yAxis = randomLongNumber();

	console.log('--------------------------------------');
	console.log('Captain, enemy missile fired!');

	if (computerFired[xAxis][yAxis] === 'F') {							// If a missile has already been fired at this coordinate, retarget
		computerFireMissile();

	} else if (player[xAxis][yAxis] === "") {
		console.log('Captain, fleet vessel suffered a direct hit');
		player[xAxis][yAxis] = "-";
		computerFired[xAxis][yAxis] = 'F';
		computerShotsHit++;
		checkWinner('computer');
	} else {
		console.log("Enemy missile missed, landed in the water.");
		computerFired[xAxis][yAxis] = 'F';
		userInput();
	}
	computerShotsFired++;
}


///////////////// Component 5: SUPPORT FUNCTIONS //////////////////

function randomShortNumber() {
	var randomNumber = Math.round((Math.random() * 5) + 1);	
	return randomNumber;
}

function randomLongNumber() {
	var randomNumber = Math.round((Math.random() * 9) + 1);
	return randomNumber;
}


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
	} else {												// invalid entries return false ---> Validations on input
		return false;
	}
}



////////////////////////// CALLING THE GAME START //////////////////////

function startGame() {
	setGrid(computer);
	setGrid(player);
	userInput();
}


startGame();






