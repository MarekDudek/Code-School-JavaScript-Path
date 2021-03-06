/*
 * Forest of Function Expressions
 */

print('Forest of Function Expressions');

// loads only when program reaches this line of code !!!
var diff = function diffOfSquares(a, b) {
	return a*a - b*b;
};

// used by declared variable number, name used to declare function is not defined !!!
diff(9, 5);

// anonymous function
var diff2 = function (a, b) {
	return a*a - b*b;
};

diff2(9, 5);

// prints the contents of function
print(diff2);

// calling function passed
var compute = function(computation, a, b) {
	return computation(a, b);
}

var result = compute(diff2, 9, 5);
print(result);


// Passing function expressions

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var results = numbers.map( function(n) { return n*n; } );
print(results);


// Returned Functions and Immediate Invocation
