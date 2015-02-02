/*
 * Plains of Prototypes
 */

try { load('mylib.js'); } catch (err) {};

// Prototypes and Inheritance
// * Object
// 	* valueOf 		* constructor 		* toLocaleString
// 	* toString		* isPrototypeOf 	* propertyIsEnumerable
// 	* hasOwnProperty  	* ...
// * Number
// 	* toFixed		* toExponential		* toPrecision
// * String
// 	* length 		* charAt() 		* trim()
// 	* concat() 		* indexOf() 		* replace()
// 	* toUpperCase()  	* toLowerCase()  	* substring()
// * Array
// 	* length 		* pop() 		* push()
// 	* shift() 		* reverse() 		* sort()
// 	* join() 		* reduce() 		* slice()
// * Function
// 	* name
// 	* apply()		* bind()		* call()


String.prototype.countAll = function(letter) {
	var count = 0;
	var upperCased = letter.toUpperCase();
	for (var i = 0; i < this.length; i++)
		if (this.charAt(i).toUpperCase() == upperCased) 
			count++;
	return count;
}

print$('some string'.countAll('s'));


Object.prototype.noCalvesYet = function() {
	return this.type == 'cow' && this.hadCalf === null;
};

Array.prototype.countForBreeding = function() {
	var numToBreed = 0;
	for (var i=0; i<this.length; i++)
		if (this[i].noCalvesYet())
			numToBreed++;
	return numToBreed;
};

var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

for (var i=0; i<forestCows.length; i++) {
	print$(forestCows[i].noCalvesYet());
}

print$(forestCows.countForBreeding());


// Inheritance and constructors

var shoe = {size: 6, gender: 'women', construction: 'slipper'};
var magicShoe = Object.create(shoe);

print$(Object.prototype.isPrototypeOf(shoe));
print$(Object.prototype.isPrototypeOf(magicShoe));

print$(shoe.isPrototypeOf(magicShoe));
print$(magicShoe.isPrototypeOf(shoe));


function Shoe(shoeSize, shoeColor, forGender, constructStyle) {
	this.size = shoeSize;
	this.color = shoeColor;
	this.gender = forGender;
	this.construction = constructStyle;
}

Shoe.prototype = {
	putOn   : function() { print$("Your " + this.construction + "'s on!"); },
	takeOff : function() { print$("Uh, what's that smell?"); } 
};

var beachShoe = new Shoe(10, 'blue', 'women', 'flipflop');
print$(beachShoe);

beachShoe.putOn();
beachShoe.takeOff();
