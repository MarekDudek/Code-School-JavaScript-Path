/*
 * Hoisting Hills
 */

function print$(message) {
	try {
		console.log(message);
	} 
	catch (err) {
		print(message);
	}
}

// Program load order

function sumOfSquares(a, b) {
	var x = add(a*a, b*b);
	return x;
	function add(c, d) {
		var a = c + d;
		return a;
	}
}

//console.log('sum of squares of 3 and 4: ' + sumOfSquares(3, 4));


function getMyseryNumber1() {
	function chooseMystery() {
		return 12;
	}
	return chooseMystery();
	function chooseMystery() {
		return 7;
	}
}

//print('Mystery number 1: ' + getMyseryNumber1());
//console.log('Mystery number 1: ' + getMyseryNumber1());

function getMyseryNumber2() {
	var chooseMystery = function () {
		return 12;
	}
	return chooseMystery();
	var chooseMystery = function() {
		return 7;
	}
}

//print('Mystery number 2: ' + getMyseryNumber2());
//console.log('Mystery number 2 ' + getMyseryNumber2());

function getMyseryNumber3() {
	return chooseMystery();
	var chooseMystery = function () {
		return 12;
	}
	var chooseMystery = function() {
		return 7;
	}
}

//print('Mystery number 3: ' + getMyseryNumber3());
//console.log('Mystery number 3: ' + getMyseryNumber3());



// Analyzing load order

function theBridgeOfHoistingDoom () {

	function balrog(){
		return "fire";
	}

	var ring;

	function elf(){
		return "pointy ears";
	}

	ring = wizard;

	wizard = balrog;

	return wizard();

	function balrog(){
		return "whip";
	}

	function wizard(){
		return "white";
	}

	var power = ring();

	return elf();

	function elf(){
		return "immortal";
	}
}



print$(theBridgeOfHoistingDoom());
