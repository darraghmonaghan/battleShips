
var prompt = require('prompt');

var playerGrid = [['-','-','-','-','-','-','-','-','-','-'],
					['-','-','-','-','-','-','-','-','-','-'],
					['-','-','-','-','-','-','-','-','-','-'],
					['-','-','-','-','-','-','-','-','-','-'],
					['-','-','-','-','-','-','-','-','-','-'],
					['-','-','-','-','-','-','-','-','-','-'],
					['-','-','-','-','-','-','-','-','-','-'],
					['-','-','-','-','-','-','-','-','-','-'],
					['-','-','-','-','-','-','-','-','-','-'],
					['-','-','-','-','-','-','-','-','-','-']];


var computerGrid = [[null,null,null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null,null,null],                    
                    [null,null,null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null,null,null]];


// SETTING THE COMPUTERS BOAT POSITIONING //

function setComputerGrid() {
	var sizeOfShip = [4,4,5];
	for (q = 0; q < sizeOfShip.length; q++) {		
		horizontalOrVertical(sizeOfShip[q]);		
	}
	console.log(computerGrid)
}

function horizontalOrVertical(sizeOfShip) {
	randomNumber = Math.random();

	if (randomNumber < 0.5) {
		placeVertical(sizeOfShip);
	} else if (randomNumber > 0.5) {
		placeHorizontal(sizeOfShip);
	}
}

function placeVertical(sizeOfShip) {								// edge cases - boats are overlapped / overwritten
	var sizeOfShip = sizeOfShip;
	var verticalAxis = Math.round((Math.random() * 5));
	var horizontalAxis = Math.round((Math.random() * 9));

	var verticalAxis1 = (verticalAxis + 1);
	var verticalAxis2 = (verticalAxis + 2);
	var verticalAxis3 = (verticalAxis + 3);
	var verticalAxis4 = (verticalAxis + 4);

	if (sizeOfShip === 4) {
		computerGrid[verticalAxis][horizontalAxis] = '4';
		computerGrid[verticalAxis1][horizontalAxis] = '4';
		computerGrid[verticalAxis2][horizontalAxis] = '4';
		computerGrid[verticalAxis3][horizontalAxis] = '4';						
	} else if (sizeOfShip === 5) {
		computerGrid[verticalAxis][horizontalAxis] = '5';
		computerGrid[verticalAxis1][horizontalAxis] = '5';
		computerGrid[verticalAxis2][horizontalAxis] = '5';
		computerGrid[verticalAxis3][horizontalAxis] = '5';				
		computerGrid[verticalAxis4][horizontalAxis] = '5';
	}
}

function placeHorizontal(sizeOfShip) {								// edge cases - boats are overlapped / overwritten
	var sizeOfShip = sizeOfShip;
	var verticalAxis = Math.round((Math.random() * 9));
	var horizontalAxis = Math.round((Math.random() * 5));

	var horizontalAxis1 = (horizontalAxis + 1);
	var horizontalAxis2 = (horizontalAxis + 2);
	var horizontalAxis3 = (horizontalAxis + 3);
	var horizontalAxis4 = (horizontalAxis + 4);

	if (sizeOfShip === 4) {
		computerGrid[verticalAxis][horizontalAxis] = '4';
		computerGrid[verticalAxis][horizontalAxis1] = '4';				
		computerGrid[verticalAxis][horizontalAxis2] = '4';
		computerGrid[verticalAxis][horizontalAxis3] = '4';
	} else if (sizeOfShip === 5) {
		computerGrid[verticalAxis][horizontalAxis] = '5';
		computerGrid[verticalAxis][horizontalAxis1] = '5';
		computerGrid[verticalAxis][horizontalAxis2] = '5';
		computerGrid[verticalAxis][horizontalAxis3] = '5';
		computerGrid[verticalAxis][horizontalAxis4] = '5';					
	}
}


///////////////// SETTING THE PLAYERS BOAT POSITIONING //////////////////

// macro function function setPlayerBoats(), to call other sub functions

// console.log('please select where to place your first boat, and vertical or horizontal, e.g. "A4, HORIZONTAL", return window.prompt()

// if (input[0] === 'A' || 'a')
	// playerGrid[0][input[1]] = 'O'
// else if () {

// }


function setPlayerGrid() {
	input4SquareBoat();
	// input4SquareBoat();
	// input5SquareBoat();
}


function input4SquareBoat() {
  prompt.start();
  console.log('Please select the placement of your ship, input params: X-Axis = A to J (Uppercase), Y-Axis = 1 to 10, Ship Placement = "vertical" or "horizontal" (lowercase):');
  prompt.get(['XAxis', 'YAxis', 'Placement'], function (err, result) {

  var boatSize = 4;

  	// BUG BELOW //
    if (result.Placement !== ('vertical' && 'horizontal')) {										// BUG HERE - logical operator not working
    	console.log('invalid entry, check spelling of "horizontal" or "vertical"');
    } else if (result.Placement === 'horizontal') {
    	placePlayerBoatHorizontal(result.XAxis, result.YAxis, boatSize);    	
    } else if (result.Placement === 'vertical') {
    	placePlayerBoatVertical(result.XAxis, result.YAxis, boatSize);
    }
  });
}


function input5SquareBoat() {

}


function placePlayerBoatHorizontal(XAxis, YAxis, boatSize) {
    var verticalAxisData = parseInt(YAxis);						// converting it into a number
    var horizontalAxisData = convertLetterToInteger(XAxis);			// converting axis letter into a number

    var horizontalAxisData1 = (horizontalAxisData + 1);
    var horizontalAxisData2 = (horizontalAxisData + 2);
    var horizontalAxisData3 = (horizontalAxisData + 3);
    var horizontalAxisData4 = (horizontalAxisData + 4);
    var horizontalAxisData5 = (horizontalAxisData + 5);

    if (boatSize === 4) {
    	playerGrid[verticalAxisData][horizontalAxisData] = 'S';
    	playerGrid[verticalAxisData][horizontalAxisData1] = 'S';
    	playerGrid[verticalAxisData][horizontalAxisData2] = 'S';
    	playerGrid[verticalAxisData][horizontalAxisData3] = 'S';    	    	    	
    } else if (boatSize === 5) {
    	playerGrid[verticalAxisData][horizontalAxisData] = 'S';
    	playerGrid[verticalAxisData][horizontalAxisData1] = 'S';
    	playerGrid[verticalAxisData][horizontalAxisData2] = 'S';
    	playerGrid[verticalAxisData][horizontalAxisData3] = 'S'; 
    	playerGrid[verticalAxisData][horizontalAxisData4] = 'S';
    }
    console.log(playerGrid); 
}



function convertLetterToInteger(letter) {					// convert letter(A-J) to number(0-9) and return
	if (letter === 'A') {
		return 0;
	} else if (letter === 'B') {
		return 1;
	} else if (letter === 'C') {
		return 2;
	} else if (letter === 'D') {
		return 3;
	} else if (letter === 'E') {
		return 4;
	} else if (letter === 'F') {
		return 5;
	} else if (letter === 'G') {
		return 6;
	} else if (letter === 'H') {
		return 7;
	} else if (letter === 'I') {
		return 8;
	} else if (letter === 'J') {
		return 9;
	}
}


function placePlayerBoatVertical(XAxis, YAxis) {
    var YAxisData = parseInt(YAxis);	
}



// CALLING THE GAME START //

// setComputerGrid();
setPlayerGrid();






