/*
 * Cold Closures Cove
 */

// The Concept of Closure

// mystery(3) returns function that multiplies parameter by 20 ((3+2) * 4 ) 
// mystery3(hidden) returns function that calls hidden with 6 and adds argument, 20*6 + bonus = 120 + bonus


// Highway to the Danger Zones

function warningMaker( obstacle ) {
  
	var count = 0;
	var zones = [];

	return function ( number, location ) {
		count++;
		zones.push(location);

		var zonesMessage = '';
		for (var i=0; i < zones.length; i++) {
			zonesMessage += zones[i] + '\n';
		}

		alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" + 
	    		number + " " + obstacle + "(s) spotted at the " + location + "!\n" + 
	    		"This is Alert #" + count + " today for " + obstacle + " danger.\n" + 
			'Current danger zones are:\n' + zonesMessage
		);
	};
}

var giantIceBatWarningMaker = warningMaker('giant ice bat');

//giantIceBatWarningMaker(1, 'Blizzard Beach');
//giantIceBatWarningMaker(2, 'Ice Caves');
//giantIceBatWarningMaker(20, 'Frozen Falls');


function warningMaker( obstacle ) {
	var count = 0;
	var zones = [];
	var numbers = [];

	return function ( number, location ) {

		count++;

		zones.push(location);
		numbers.push(number);

		var list = "";
		for(var i = 0; i<zones.length; i++){        
			list = list + "\n" + zones[i] + ' (' + numbers[i] + ')';
		}

		alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
			number + " " + obstacle + "(s) spotted at the " + location + "!\n" +
			"This is Alert #" + count + " today for " + obstacle + " danger.\n" +
			"Current danger zones are: " + list
		);
	};
}

//giantIceBatWarningMaker(1, 'Blizzard Beach');
//giantIceBatWarningMaker(2, 'Ice Caves');
//giantIceBatWarningMaker(20, 'Frozen Falls');


// Dangers at the Moment of Closure

/*
 * Closures bind values at the very last moment!!!
 */


// Final Closed Values II challenge

var listOfSharks = ["Sea Pain", "Great Wheezy", "DJ Chewie", "Lil' Bitey", "Finmaster Flex", "Swim Khalifa", "Ice Teeth", "The Notorious J.A.W."];
var listOfTargets = ["icicle bat", "snow yeti", "killer penguin", "frost tiger", "polar bear", "iceberg", "blue witch", "wooly mammoth"];

function makeTargetAssigner( sharks, targets ) {

	return function(shark) {
		for (var i=0; i<sharks.length; i++) {
			if (shark == sharks[i]) {
				alert("What up, " + shark + "!\nThere've been " + targets[i] + " sightings in our 'hood!\nTime for a swim-by lasering, homie!");
			}
		}
	};
}

var getTargetFor = makeTargetAssigner(  listOfSharks, listOfTargets );
getTargetFor("Ice Teeth");
