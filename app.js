/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var turn = true;
var next1 = document.getElementsByClassName("player-0-panel")[0];
var next2 = document.getElementsByClassName("player-1-panel")[0];
var Hold_btn = document.getElementsByClassName("btn-hold")[0];
var dice_roll = document.getElementsByClassName("btn-roll")[0];
var new_game = document.getElementsByClassName("btn-new")[0];
var rnd1;
var rnd2;
var tillfallig;
var player_1_score = 0;
var player_2_score = 0;
var player_1_current_score = 0;
var player_2_current_score = 0;
var prev_score_1 = 0;
var prev_score_2 = 0;
var player_1_check_win = 0;
var player_2_check_win = 0;
var winning_score = 100;
var play = true;


Hold_btn.addEventListener("click", Hold);
dice_roll.addEventListener("click", roll_dice);


function Hold() {
if (play) {

next1.classList.toggle("active");

next2.classList.toggle("active");

if (turn) {
	turn = false;
	player_1_current_score = player_1_current_score + player_1_score;
	player_1_score = 0;
	document.querySelectorAll("div")[3].innerHTML = player_1_score;
	document.querySelectorAll("div")[6].innerHTML = player_1_current_score;
}
else {
	turn = true;
	player_2_current_score = player_2_current_score + player_2_score;
	player_2_score = 0;
	document.querySelectorAll("div")[9].innerHTML = player_2_score;
	document.querySelectorAll("div")[12].innerHTML = player_2_current_score;
}

prev_score_1 = 0;
prev_score_2 = 0;

}
}



function roll_dice() {
if (play) {

rnd1 = Math.floor(Math.random() * 6) + 1;
rnd2 = Math.floor(Math.random() * 6) + 1;


if (rnd1 == 1) {
	var dice1 = document.getElementById("dice-1");
	dice1.setAttribute("src", "dice-1.png");
}
if (rnd1 == 2) {
	var dice1 = document.getElementById("dice-1");
	dice1.setAttribute("src", "dice-2.png");
}
if (rnd1 == 3) {
	var dice1 = document.getElementById("dice-1");
	dice1.setAttribute("src", "dice-3.png");
}
if (rnd1 == 4) {
	var dice1 = document.getElementById("dice-1");
	dice1.setAttribute("src", "dice-4.png");
}
if (rnd1 == 5) {
	var dice1 = document.getElementById("dice-1");
	dice1.setAttribute("src", "dice-5.png");
}
if (rnd1 == 6) {
	var dice1 = document.getElementById("dice-1");
	dice1.setAttribute("src", "dice-6.png");
}



if (rnd2 == 1) {
	var dice1 = document.getElementById("dice-2");
	dice1.setAttribute("src", "dice-1.png");
}
if (rnd2 == 2) {
	var dice1 = document.getElementById("dice-2");
	dice1.setAttribute("src", "dice-2.png");
}
if (rnd2 == 3) {
	var dice1 = document.getElementById("dice-2");
	dice1.setAttribute("src", "dice-3.png");
}
if (rnd2 == 4) {
	var dice1 = document.getElementById("dice-2");
	dice1.setAttribute("src", "dice-4.png");
}
if (rnd2 == 5) {
	var dice1 = document.getElementById("dice-2");
	dice1.setAttribute("src", "dice-5.png");
}
if (rnd2 == 6) {
	var dice1 = document.getElementById("dice-2");
	dice1.setAttribute("src", "dice-6.png");
}

if (rnd1 != 1 && rnd2 != 1) {
	tillfallig = rnd1 + rnd2;

	if (turn == true) {
		player_1_score = player_1_score + tillfallig;
		document.querySelectorAll("div")[3].innerHTML = player_1_score;
	}
	if (turn == false) {
		player_2_score = player_2_score + tillfallig;
		document.querySelectorAll("div")[9].innerHTML = player_2_score;
	}
}

if (rnd1 == 1 || rnd2 == 1) {
	next1.classList.toggle("active");
	next2.classList.toggle("active");
	if (turn) {
		turn = false;
		player_1_score = 0;
		document.querySelectorAll("div")[3].innerHTML = player_1_score;
	}
	else {
		turn = true;
		player_2_score = 0;
		document.querySelectorAll("div")[9].innerHTML = player_2_score;
	}
}
if (rnd1 != 1 || rnd2 != 1) {
	if (turn) {
		if (rnd1 == 6 && prev_score_1 == rnd1) {
			player_1_score = 0;
			player_1_current_score = 0;
			document.querySelectorAll("div")[3].innerHTML = 0;
			document.querySelectorAll("div")[6].innerHTML = 0;
			next1.classList.toggle("active");
			next2.classList.toggle("active");
			turn = false;
		}
		if (rnd1 == 6 && prev_score_2 == rnd1) {
			player_1_score = 0;
			player_1_current_score = 0;
			document.querySelectorAll("div")[3].innerHTML = 0;
			document.querySelectorAll("div")[6].innerHTML = 0;
			next1.classList.toggle("active");
			next2.classList.toggle("active");
			turn = false;
		}
		if (rnd2 == 6 && prev_score_1 == rnd2) {
			player_1_score = 0;
			player_1_current_score = 0;
			document.querySelectorAll("div")[3].innerHTML = 0;
			document.querySelectorAll("div")[6].innerHTML = 0;
			next1.classList.toggle("active");
			next2.classList.toggle("active");
			turn = false;
		}
		if (rnd2 == 6 && prev_score_2 == rnd2) {
			player_1_score = 0;
			player_1_current_score = 0;
			document.querySelectorAll("div")[3].innerHTML = 0;
			document.querySelectorAll("div")[6].innerHTML = 0;
			next1.classList.toggle("active");
			next2.classList.toggle("active");
			turn = false;
		}
	}

	else {
		if (rnd1 == 6 && prev_score_1 == rnd1) {
			player_2_score = 0;
			player_2_current_score = 0;
			document.querySelectorAll("div")[9].innerHTML = 0;
			document.querySelectorAll("div")[12].innerHTML = 0;
			next1.classList.toggle("active");
			next2.classList.toggle("active");
			turn = true;
		}
		if (rnd1 == 6 && prev_score_2 == rnd1) {
			player_2_score = 0;
			player_2_current_score = 0;
			document.querySelectorAll("div")[9].innerHTML = 0;
			document.querySelectorAll("div")[12].innerHTML = 0;
			next1.classList.toggle("active");
			next2.classList.toggle("active");
			turn = true;
		}
		if (rnd2 == 6 && prev_score_1 == rnd2) {
			player_2_score = 0;
			player_2_current_score = 0;
			document.querySelectorAll("div")[9].innerHTML = 0;
			document.querySelectorAll("div")[12].innerHTML = 0;
			next1.classList.toggle("active");
			next2.classList.toggle("active");
			turn = true;
		}
		if (rnd2 == 6 && prev_score_2 == rnd2) {
			player_2_score = 0;
			player_2_current_score = 0;
			document.querySelectorAll("div")[9].innerHTML = 0;
			document.querySelectorAll("div")[12].innerHTML = 0;
			next1.classList.toggle("active");
			next2.classList.toggle("active");
			turn = true;
		}
	}
}

prev_score_1 = rnd1;
prev_score_2 = rnd2;

if (rnd1 == 1 || rnd2 == 1) {
	prev_score_1 = 0;
	prev_score_2 = 0;
}

player_1_check_win = player_1_score + player_1_current_score;
player_2_check_win = player_2_score + player_2_current_score;

if (player_1_check_win >= winning_score) {
	play = false;
	document.querySelectorAll("div")[2].innerHTML = "Winner";
	document.querySelectorAll("div")[8].innerHTML = "Loser";
}
if (player_2_check_win >= winning_score) {
	play = false;
	document.querySelectorAll("div")[8].innerHTML = "Winner";
	document.querySelectorAll("div")[2].innerHTML = "Loser";
}
}
}

new_game.addEventListener("click", reset);

function reset() {
	player_1_score = 0;
	player_2_score = 0;
	player_1_current_score = 0;
	player_2_current_score = 0;
	document.querySelectorAll("div")[3].innerHTML = player_1_score;
	document.querySelectorAll("div")[6].innerHTML = player_1_current_score;
	document.querySelectorAll("div")[9].innerHTML = player_2_score;
	document.querySelectorAll("div")[12].innerHTML = player_2_current_score;
	if (turn == false) {
		turn = true;
		next1.classList.toggle("active");
		next2.classList.toggle("active");
	}
	winning_score = document.getElementsByClassName("final-score")[0].value;
	if (winning_score == 0) {
		winning_score = 100;
	}
	play = true;
	document.querySelectorAll("div")[2].innerHTML = "Player 1";
	document.querySelectorAll("div")[8].innerHTML = "Player 2";
}