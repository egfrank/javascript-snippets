"use strict";
/*// Numbers

let num = 1000000;
let mil = 1e6;
console.log( mil )

// Binary
let twofiftysix = 243;
console.log( twofiftysix.toString(2) )

// Weird note

// console.log( 256.toString(2) ) wrong
console.log( 256..toString(2) )  // correct

let d = 3.1415926;

console.log(`Floor: ${Math.floor(d)}` );
console.log(`Ceil: ${Math.ceil(d)}` );
console.log(`Round: ${Math.round(d)}` );
console.log(`Trunc: ${Math.trunc(d)}` );


// isNaN()

console.log( isNaN(undefined) ); // true
console.log( isNaN(100) );
console.log( isNaN(NaN) );


// parseInt and parseFloat
console.log( parseInt('16px') );*/


// Strings

/*// linebreak = \n
console.log(' 0 0  \n www');

// quoting
console.log( 'It\'s a me, Mario' );

// length
console.log( 'Mississippi'.length );

// indexing characters


const s = 'Mississippi';
console.log( s[s.length - 1] );
console.log( s.substr(s.length - 6, 6));
console.log( s.indexOf('s') );

function findChar(str, target) {
	const charArray = [];
	let pos = 0;
	while (true) {
		let ind = str.indexOf(target, pos);
		if (ind == -1) break;
		charArray.push(ind);
		pos = ind + 1;
	}
	return charArray;
}

function checkFindChar(str, charArray) {
	while (charArray.length > 0) {
		let ind = charArray.shift();
		console.log(charArray.length);
		let char = str[ind];
		console.log( char );
	}
}

let sArray = findChar(s, 's') ;
let iArray = findChar(s, 'i') ;
checkFindChar(s, sArray);
checkFindChar(s, iArray);*/


// Iterables and Arrays

// Absolutely insane, not going to do anything with them right now.
// Just nuts.


// Maps

/*// Maps are like Objects but Objects convert
// all indecies to strings, Maps don't

let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123
*/
// Iterating over Maps is similar to Python

/*let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);
console.log( 'Ingredients!');
for (let ingredient of recipeMap.keys()) {
	console.log( ingredient );
}
console.log( '\nAmounts ');

for (let amnt of recipeMap.values()) {
	console.log( amnt );
}

console.log( '\nBoth! ');

for (let entry of recipeMap.entries()) {
	console.log( `${entry[0]} -> ${entry[1]} ` );
}
*/


// Set
