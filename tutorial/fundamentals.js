// Start all scripts with "use strict"
"use strict";

function evalLog(n, compare, m){
	let s = `${n} ${compare} ${m}`;
	console.log(s);
	console.log(eval(s));
}

function boolToYN(b){
	if (b === true){
		return 'yes';
	}
	else{
		return 'no';
	}
}


// Alerting
/*
let message = "Hello, Elliot";
alert(message);
*/

// Semicolons may be omitted in most cases when a line break exists.

// JavaScript does not assume a semicolon before square brackets
// even if there's a line break



// A variable is a “named storage” for data.
/*
let aMessage;
let bMessage;
aMessage = 'Hello, Elliot';
bMessage = aMessage;
console.log(aMessage);
console.log(bMessage);
*/
// Variables are mutable and are not assignments.

/*aMessage = 'Hello, Mary';
console.log(aMessage);
console.log(bMessage);
*/
// Constants are immutable

/*const myBirthday = '18.04.1982';
myBirthday = '05.05.2001';
*/
// Gives us TypeError: Assignment to constant variable.

// Javascript is dynamically typed
/*
let elliot = 'Me';
elliot = 23;
console.log(elliot);
*/

// Backtick strings

/*let elliot;
let age = 23;
elliot = `The boy is ${age} years old`;
console.log(elliot);
*/


// Typeof operator
/*
let elliot = 'Elliot';
console.log(elliot);
console.log(typeof elliot);
*/

// Addition concatenates strings

/*
console.log(true + false);
console.log("" + true + false);
*/

// Unary + is the same as Number()

/*
console.log(+true == Number(true));
console.log(+true != String(true));
*/


// Remainder %

/*console.log(17 % 5 == 2);
*/

// Exponents 

/*console.log(2 ** 5 == 32);
*/


// Increment/decrement can only be applied to variables. 
/*The prefix version returns the incremented number.
The postfix version returns the number unincremented.
*/
/*
let n = 3;
console.log(n++ == 3);
console.log(n == 4);
console.log(++n == 5);
*/

// Modify-in-place

/*let n = 3;
let m = 5;

n += 12;
m *= 3;

console.log(n == m);*/

// Comparisons
// String comparisons
/*console.log('Z' > 'A');
*/

// When comparing values of different types, 
// JavaScript converts the values to numbers.
/*console.log('01' == 1);
*/

// This could be a problem sort of
/*console.log('00' == false);
*/

// Strict comparison

/*console.log(('00' === false) == false);
*/


// A "sweet couple", null and undefined
// (yea idk man)

/*console.log(
	(null == undefined) == true
);
console.log(
	(null === undefined) === false
);
*/

// Comparisons convert null to a number, treating it as 0
// evalLog(null, '>=', 0);

// Prompting

/*let age = prompt('How old are you?', 23);
alert(`You'll die at the age of ${++age}!`);
let acceptedFate = confirm('That cool with you?');
alert(`is it cool with them? ${boolToYN(acceptedFate).toUpperCase()}!`);

*/

// Simple page and if else
/*let name = prompt('What\'s your name?', '');
if (name == 'elliot'){
	alert('elliot you sick son of a bitch\
		how have you been!?\
		capitalize your name man');
} else if (name == 'Elliot') {
	alert('Elliot you sick son of a bitch\
	 how have you been!?');
} else {
	alert(`Hi ${name} welcome to our cult`); 
}*/

// Conditional ?

// let mood = confirm('Feeling ok?');
// let moodMessage = mood ? 'Good' : 'Bad';
// alert(moodMessage)


// Logical operators

// let a = true;
// let b = false;
// console.log(a || b);
// console.log(b || b

// OR returns first value
//  I'm sensing a big emphasis on returning values

// let e = 'elliot';
// let v = 'victoria';
// let winnerWinner = v || e;
// console.log(winnerWinner == 'victoria')


// AND returns the first falsey vaule

// let e = null;
// let v = 'victoria';
// let winnerWinner = v && e;
// console.log(winnerWinner === null)

// While loop
// let i = 1;
// while (i < 10){
// 	alert(i);
// 	i++;
// }

// For loop

// for (let i=0; i < 3; i++) {
// 	alert(i);
// }


// Outer break
// outer: for (let i = 0; i < 3; i++) {

// 	for (let j = 0; j < 3; j++) {
// 		let input = prompt(`Value at coords (${i},${j})`, '');

// 		if (!input) break outer;

// 		console.log(`(${i},${j}): ${input}`)
// 	}
// }


// Switch

/*let a = 2 + 2;

switch (a) {
	case 3:
		alert( 'Too small' );
		break
	case 4: 
		alert( 'Nice' );
		break
	case 5:
		alert( 'Too damn big' );
		break
	default:
		alert( 'idk bruh ');
}
*/

// Function declaration

// function showMessage() {
// 	alert( 'Hello everyone!' );
// }

// showMessage();
// showMessage();



// Local variables 

// If a same-named variable is declared inside the 
// function then it shadows the outer one. For 
// instance, in the code below the function uses 
// the local userName. The outer one is ignored:

/*
let message = 'Ya freak';

function showMessage() {
	let message = "Hello, I'm Javascript!";
	console.log(message);
}

showMessage();
console.log(message);

*/

// Default values
/*
function showMessage(sender, text = 'get bread') {
	alert( sender + ': ' + text );
}
showMessage('elliot', 'get brad');
showMessage('elliot');
*/
// In JavaScript, a default parameter is evaluated every time the
// function is called without the respective parameter This is in
// contrast to some other languages like Python, where any default
// parameters are evaluated only once during the initial
// interpretation.

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.

// Functions as comments

// showPrimes(7);

// function showPrimes(n) {
// 	nextPrime: for (let i = 2; i < n; i++) {
// 		if ( !isPrime(i) ){
// 			continue nextPrime;
// 		}
// 	alert( i );
// 	}
// }

// function isPrime(n) {
// 	for (let j = 2; j < n; j++) {
//       if ( n % j == 0) return false;
//     }
//     return true; 
// }


// Functions are just values

// let sayHi = function() {
// 	return "hello!" ;
// };

// alert(sayHi);
// alert( sayHi());


// Callback functions

/*function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
	"Do you agree?",
	function() { alert('Say so then'); },
	function() { alert('Aight so you disagree then'); }
);*/

// Not totally sure what the significance of 
// the callback part is yet.


// Function declaration is like "function verb()""
// Function expression is "let verb = function()"
// Declarations are defined for whole script.
// If a function declaration is made within a 
// code block, it is visible everywhere inside 
// that block. But not outside of it.


// Arrow functions

/*let sum = (a, b) => a + b;
alert ( sum(10, 20) )
*/



/*function(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

ask(
	"Agree?",
	() => alert('Agreeed'),
	() => alert('I disagree'))
);*/


// To indicate a mathematical error, JavaScript functions 
// usually return NaN. Let’s do the same for invalid values of n.





