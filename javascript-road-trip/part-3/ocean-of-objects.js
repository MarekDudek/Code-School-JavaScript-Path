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

myBox.width = 12;
print$(myBox);

myBox.weight = 24;
print$(myBox);

myBox['destination'] = 'San Francisco';
print$(myBox);

delete myBox.contents;
print$(myBox);

myBox["# of books"] = 0;

function addBook(box, name, writer) {
	box["# of books"]++;
	var book = {
		name: name,
		writer: writer
	}
	if (box.contents == undefined) 
		box.contents = [];
	box.contents.push(book);
}

addBook(myBox, 'On the Road', 'Jack Kerouac');
addBook(myBox, 'Title 1', 'Author 1');


// Man your Bulb Stations challenge

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
	gateClosed: true,
	weaponBulbs: superBlinders,
	capacity: 30,
	secretPassageTo: "Underwater Outpost",
	numRangers: 3,
	ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
	ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
	ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};
