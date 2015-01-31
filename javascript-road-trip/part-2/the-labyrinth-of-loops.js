
// while loop

var i   = 0;
var sum = 0;

while (i < 10) {
	i++;
	sum += i;
}

var num = 10;
while (num > 0) {
	num--;
}

var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
	numSheep *= 4;
	monthNumber++;
}

// for loop

for (var i=1; i <= 10; i++) {
}

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
	totalMW += 62;
	currentGen++;
}

for ( ; currentGen <= 19; currentGen++) {
	totalMW += 124;
}

// Problem solving with Conditionals challenge

var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
	if (numSheep > 10000) {
		var removed = numSheep / 2;
		numSheep -= removed;
	}
	numSheep *= 4;
}


// Loop Echo challange #1

var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

	if (monthNumber % 4 == 0) {
		var removed = numSheep * 3/4;
		numSheep -= removed;
	} else if (numSheep > 10000) {
		var removed = numSheep / 2;
		numSheep -= removed;
	}


	numSheep *= 4;
}

// Loop Echo challange #2

var totalGen = 19;
var totalMW = 0;

for (var currentGen = 1; currentGen <= totalGen; currentGen++) {
	if (currentGen % 2 == 0) {
		if (currentGen <= 4) {
			totalMW += 62;
		} else {
			totalMW += 124;
		}
	} else {
	}
}

// Built-In's Bluff

// alert('My alert');

//var answer = confirm('Really?');

//var input = prompt('Input');
//if (input == null) {
//	console.log('User refused to answer');
//} else {
//	console.log('User answered "' + input + '"');
//}

typeof(null);
typeof null;

//var userAge = prompt("What's your age, user?");
//var ageIsCorrect = confirm('You entered ' + userAge + '. Is this correct?');

// Built-In's Bluff chalange 4

//var userAge = prompt("What's your age, user?");
//var ageIsCorrect = false;

//while (ageIsCorrect == false) {
//	ageIsCorrect = confirm('You entered ' + userAge + '. Is this correct?');
//	if (ageIsCorrect) {
//		alert('Great! Your age is logged as ' + userAge + '.');
//	} else {
//		var userAge = prompt("What's your age, user?");
//	}
//}
