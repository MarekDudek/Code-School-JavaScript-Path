/*
 * The Array Archipelago
 */

var passangers = ['Greg Pollack', 'Aimee Simone', 'Thomas Meeks'];
var passanger1 = passangers[0];
passangers[3] = 'Olivier Local';

passangers[4] = 'Ashley Smith';

var lastPassanger = passangers.pop();

passangers.push('Adam Rensel');

var comboArray = ['One', 'fish', 2, 'fish'];

var arrayOfArrays = [passangers, comboArray];
var element = arrayOfArrays[1][2];

passangers[3] = undefined;

for (var i=0; i < passangers.length; i++) {
}

var emptyArray = [];

