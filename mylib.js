
function print$(message) {
	try {
		console.log(message);
	} 
	catch (err) {
		print(message);
	}
}

print$('Loading mylib ...');
print$('... mylib loaded.');
