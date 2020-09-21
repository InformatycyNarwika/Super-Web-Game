var player, comp;
const move = ['rock', 'paper', 'scissors']; 

function checkVictory (player) {
		
	// * Generate random numbers from 0 to 2
	var compMoveRoll = Math.floor(Math.random() * 3);
	
	// * Return new comp value
	comp = move[compMoveRoll];

	// * Generate c
	document.getElementById("comp-img").src = `assets/${comp}.png`;


	// * Checking if its a draw
	if (player == comp){
		return document.getElementById("result").src = "assets/draw.jpg";
	}

	if (player == 'rock') {
		if (comp == 'paper'){
			document.getElementById("result").src = "assets/youreloser.jpg";
		} else {
			document.getElementById("result").src = "assets/yourewinner.png";
		}
}

if (player == 'paper') {
	if (comp == 'scissors'){
		document.getElementById("result").src = "assets/youreloser.jpg";
	} else {
		document.getElementById("result").src = "assets/yourewinner.png";
	}
}

if (player == 'scissors') {
	if (comp == 'rock'){
		document.getElementById("result").src = "assets/youreloser.jpg";
	}else{
		document.getElementById("result").src = "assets/yourewinner.png";
	}
}
}