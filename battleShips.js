
var prompt = require('prompt');

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

function placeVertical(sizeOfShip, entity) {								// edge cases - boats are overlapped / overwritten
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

function winnerIsPlayer() {
	if (computerGrid === cleanGrid) {
		console.log('You Won! Congratulations, you rule the 7 Seas!');
	} else {
		userInput();
	}
}

function winnerIsComputer() {
	if (playerGrid === cleanGrid) {
		console.log('You Lost, the computer sank all your ships.');
	} else {
		computerFireMissile();
	}
}

///////////////// Component 3: USER FIRING MiSSLES //////////////////

function userInput() {
	console.log('Previous missile strikes:')
	console.log(playerFired);

	prompt.start();
	console.log('Select the coordinates you would like to fire at, (A-J & 1-10, e.g. F8)');
	prompt.get(['coordinates'], function (err, result) {

	userFireMissile(result.coordinates);
	
	})
}

function userFireMissile(coordinates) {
	
	var xAxis = coordinates[0];
	var yAxis = coordinates[1];

	var xAxisConverted = convertLetterToInteger(coordinates[0]);		// converting letter character to number
	var yAxisConverted = parseInt(coordinates[1]);					// converting number from string to integer	

	console.log('-------------------------')
	console.log('Missile being fired at: ' + xAxis + yAxis);

	if (computerGrid[xAxisConverted][yAxisConverted] === '') {
		console.log('HIT! Successful missile strike!');
		updateComputerGrid(xAxisConverted, yAxisConverted);
		successfulAttempts(xAxisConverted, yAxisConverted);
		winnerIsPlayer();
	} else {
		console.log('Miss. Missile missed target, Captain.');
		missedAttempts(xAxisConverted, yAxisConverted);
		computerFireMissile();
	}
}

function successfulAttempts(xAxis, yAxis) {
	playerFired[yAxis][xAxis] = '✔';
}

function missedAttempts(xAxis, yAxis) {
	playerFired[yAxis][xAxis] = '✕';
}

function updateComputerGrid(xAxis, yAxis) {
	computerGrid[yAxis][xAxis] = '-';
}


//////////////////////////////  Component 4: Computer Missile Firing  /////////////////////////////////////// 

function computerFireMissile() {

	var xAxis = Math.round((Math.random() * 9) + 1);
	var yAxis = Math.round((Math.random() * 9) + 1);

	console.log('------------------------------');
	console.log('Captain, enemy missile fired!');

	if (playerGrid[xAxis][yAxis] === "") {
		console.log('Captain, fleet vessel suffered a direct hit');
		playerGrid[xAxis][yAxis] = "-";
		winnerIsComputer();
	} else {
		console.log("Enemy missile missed, landed in the water.");
		userInput();
	}
}




///////////////// Component ???: SETTING THE PLAYERS BOAT POSITIONING //////////////////



// function userInput(boatSize) {
//   prompt.start();
//   console.log('Please select the placement of your ship, input params: X-Axis = A to J (Uppercase), Y-Axis = 1 to 10, Ship Placement = "vertical" or "horizontal" (lowercase):');
//   prompt.get(['XAxis', 'YAxis', 'Placement'], function (err, result) {

//   	////////////////////////// BUG BELOW //////////////////////////

//     if (result.Placement !== ('vertical' && 'horizontal')) {						// BUG HERE - logical operator not working
//     	console.log('invalid entry, check spelling of "horizontal" or "vertical"');
//     } else if (result.Placement === 'horizontal') {
//     	placePlayerBoatHorizontal(result.XAxis, result.YAxis, boatSize);    	
//     } else if (result.Placement === 'vertical') {
//     	placePlayerBoatVertical(result.XAxis, result.YAxis, boatSize);
//     }
//   });
// }



// function placePlayerBoatHorizontal(XAxis, YAxis, boatSize) {
//     var verticalAxisData = parseInt(YAxis);						// converting it into a number
//     var horizontalAxisData = convertLetterToInteger(XAxis);			// converting axis letter into a number

//     var horizontalAxisData1 = (horizontalAxisData + 1);
//     var horizontalAxisData2 = (horizontalAxisData + 2);
//     var horizontalAxisData3 = (horizontalAxisData + 3);
//     var horizontalAxisData4 = (horizontalAxisData + 4);
//     var horizontalAxisData5 = (horizontalAxisData + 5);

//     if (boatSize === 4) {
//     	playerGrid[verticalAxisData][horizontalAxisData] = 'S';
//     	playerGrid[verticalAxisData][horizontalAxisData1] = 'S';
//     	playerGrid[verticalAxisData][horizontalAxisData2] = 'S';
//     	playerGrid[verticalAxisData][horizontalAxisData3] = 'S';    	    	    	
//     } else if (boatSize === 5) {
//     	playerGrid[verticalAxisData][horizontalAxisData] = 'S';
//     	playerGrid[verticalAxisData][horizontalAxisData1] = 'S';
//     	playerGrid[verticalAxisData][horizontalAxisData2] = 'S';
//     	playerGrid[verticalAxisData][horizontalAxisData3] = 'S'; 
//     	playerGrid[verticalAxisData][horizontalAxisData4] = 'S';
//     }
// }


// function placePlayerBoatVertical(XAxis, YAxis, boatSize) {
//     var YAxisData = parseInt(YAxis);
//     var horizontalAxisData = convertLetterToInteger(XAxis);		
// }




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
	}
}



// CALLING THE GAME START //

function startGame() {

	setComputerGrid();
	setPlayerGrid();
	userInput();

}


startGame();



