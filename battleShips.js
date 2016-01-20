
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
	fourSquareBoat();
	// fourSquareBoat();
	// fiveSquareBoat();
}

function fourSquareBoat() {
	input4SquareBoat()
}

function fiveSquareBoat() {

}


function input4SquareBoat() {
  prompt.start();
  console.log('Please select the placement of your ship, input params: X-Axis = A to J (Uppercase), Y-Axis = 1 to 10, Ship Placement = "vertical" or "horizontal" (lowercase):');
  prompt.get(['XAxis', 'YAxis', 'Placement'], function (err, result) {

    // console.log('Command-line input received:');
    // console.log('X - Axis: ' + result.XAxis);
    // console.log('Y - Axis: ' + result.YAxis);
    // console.log('Placement Direction: ' + result.Placement);

    // console.log(typeof(result.XAxis));
    // console.log(typeof(result.YAxis));
    // console.log(typeof(result.Placement));

    if (result.Placement !== ('vertical' && 'horizontal')) {
    	console.log('invalid entry, check spelling of "horizontal" or "vertical"');
    } else if (result.Placement === 'horizontal') {
    	placePlayerBoatHorizontal(result.XAxis, result.YAxisData, result.Placement);    	
    } else if (result.Placement === 'vertical') {
    	placePlayerBoatVertical(result.XAxis, result.YAxisData, result.Placement);
    }
  });
}


function placePlayerBoatHorizontal(XAxis, YAxis, Placement) {
    var YAxisData = parseInt(YAxis);	

    console.log(typeof(XAxis));
    console.log(typeof(YAxisData));
    console.log(typeof(Placement));

    console.log(XAxis);
    console.log(YAxisData);
    console.log(Placement);
}

function placePlayerBoatVertical(XAxis, YAxis, Placement) {
    var YAxisData = parseInt(YAxis);	

    console.log(typeof(XAxis));
    console.log(typeof(YAxisData));
    console.log(typeof(Placement));

    console.log(XAxis);
    console.log(YAxisData);
    console.log(Placement);

}




// CALLING THE GAME START //

setComputerGrid();
setPlayerGrid();






