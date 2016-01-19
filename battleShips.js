
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
	var verticalAxis = Math.round((Math.random() * 9));
	var horizontalAxis = Math.round((Math.random() * 5));

	if (sizeOfShip === 4) {
		computerGrid[verticalAxis][horizontalAxis] = '4';
		computerGrid[(verticalAxis + 1)][horizontalAxis] = '4';
		computerGrid[(verticalAxis + 2)][horizontalAxis] = '4';
		computerGrid[(verticalAxis + 3)][horizontalAxis] = '4';						
	} else if (sizeOfShip === 5) {
		computerGrid[verticalAxis][horizontalAxis] = '5';
		computerGrid[(verticalAxis + 1)][horizontalAxis] = '5';
		computerGrid[(verticalAxis + 2)][horizontalAxis] = '5';
		computerGrid[(verticalAxis + 3)][horizontalAxis] = '5';				
		computerGrid[(verticalAxis + 4)][horizontalAxis] = '5';
	}
}

function placeHorizontal(sizeOfShip) {								// edge cases - boats are overlapped / overwritten
	var sizeOfShip = sizeOfShip;
	var verticalAxis = Math.round((Math.random() * 5));
	var horizontalAxis = Math.round((Math.random() * 9));

	if (sizeOfShip === 4) {
		computerGrid[verticalAxis][horizontalAxis] = '4';
		computerGrid[verticalAxis][(horizontalAxis + 1)] = '4';				
		computerGrid[verticalAxis][(horizontalAxis + 2)] = '4';
		computerGrid[verticalAxis][(horizontalAxis + 3)] = '4';
	} else if (sizeOfShip === 5) {
		computerGrid[verticalAxis][horizontalAxis] = '5';
		computerGrid[verticalAxis][(horizontalAxis + 1)] = '5';
		computerGrid[verticalAxis][(horizontalAxis + 2)] = '5';
		computerGrid[verticalAxis][(horizontalAxis + 3)] = '5';
		computerGrid[verticalAxis][(horizontalAxis + 4)] = '5';					
	}
}


// SETTING THE PLAYERS BOAT POSITIONING //

// PSUEDO CODE FIRST !!!!!!





// CALLING THE GAME START //

setComputerGrid();






