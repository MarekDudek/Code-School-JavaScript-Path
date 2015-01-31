/*
 * The Array Archipelago
 */

var passangers = ['Greg Pollack', 'Aimee Simone', 'Thomas Meeks'];
var passanger1 = passangers[0];
passangers[3] = 'Olivier Local';

passangers[4] = 'Ashley Smith';
print(passangers);

var lastPassanger = passangers.pop();
print(lastPassanger);
print(passangers);

passangers.push('Adam Rensel');
print(passangers);

var comboArray = ['One', 'fish', 2, 'fish'];

var arrayOfArrays = [passangers, comboArray];
var element = arrayOfArrays[1][2];
print(element);
