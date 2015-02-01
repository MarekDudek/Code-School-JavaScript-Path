/*
 * Object of Objects
 */

try { load('mylib.js'); } catch (err) {};

// object literal

var myBox = {
	height: 6, 
	width:8, 
	length:10, 
	volume: 480, 
	material:'cartboard', 
	contents:['Greate Expectations', 'The Remains of the Day', 'Peter Pan']
};

print$(myBox);
