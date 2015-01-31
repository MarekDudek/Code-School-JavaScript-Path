
// while loop

var i   = 0;
var sum = 0;

while (i < 10) {
	i++;
	sum += i;
}

var num = 10;
while (num > 0) {
	console.log(num);
	num--;
}

var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
	numSheep *= 4;
	console.log('There will be ' + numSheep + ' sheep after ' + monthNumber + ' month(s)!');
	monthNumber++;
}

// for loop

for (var i=1; i <= 10; i++) {
	console.log(i);
}

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
	totalMW += 62;
	console.log('Generator #' + currentGen + ' is on, adding 62 MW, for a total of ' + totalMW + ' MW!');
	currentGen++;
}

for ( ; currentGen <= 19; currentGen++) {
	totalMW += 124;
	console.log('Generator #' + currentGen + ' is on, adding 124 MW, for a total of ' + totalMW + ' MW!');
}

// Problem solving with Conditionals challenge

var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
	if (numSheep > 10000) {
		var removed = numSheep / 2;
		numSheep -= removed;
		console.log('Removing ' + removed + ' sheep from the population.');
	}
	numSheep *= 4;
	console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}


// Loop Echo challange #1

console.log('###########################################################################3#');

var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

	if (monthNumber % 4 == 0) {
		var removed = numSheep * 3/4;
		console.log('Removing ' + removed + ' sheep from the population.');
		numSheep -= removed;
	} else if (numSheep > 10000) {
		var removed = numSheep / 2;
		console.log('Removing ' + removed + ' sheep from the population.');
		numSheep -= removed;
	}


	numSheep *= 4;
	console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

// Loop Echo challange #2

console.log('###########################################################################3#');

var totalGen = 19;
var totalMW = 0;

for (var currentGen = 1; currentGen <= totalGen; currentGen++) {
	if (currentGen % 2 == 0) {
		if (currentGen <= 4) {
			totalMW += 62;
			console.log('Generator #' + currentGen + ' is on, adding 62 MW, for a total of ' + totalMW + ' MW!');
		} else {
			totalMW += 124;
			console.log('Generator #' + currentGen + ' is on, adding 124 MW, for a total of ' + totalMW + ' MW!');
		}
	} else {
		console.log('Generator #' + currentGen + ' is off.');
	}
}
