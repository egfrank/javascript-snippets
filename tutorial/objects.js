// Declare an object
// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax


// let user = {
//   name: "elliot",
//   age: 23,
// };
// console.log( user.name == "elliot" )
// console.log( user.age == 23 )

// // Add
// user.isAdmin = true;

// // Delete
// delete user.name;

// // Multi word

// user["is tall"] = false;
// console.log( !user["is tall"] )

// // Computed properties

// let fruit = "apple";
// let bag = {
// 	[fruit]: 5,
// };

// console.log( bag.apple )


// Property value shorthand

function makeUser(name, age) {
	return {
		name,
		age,
	}
}

// let user = makeUser('elliot', 23);
// alert( user.name )




// Non existent properties are undefined

// let user = {};

// alert( user.noSuchProperty === undefined );

// alert( "noSuchProperty" in user);


// We can iterate over keys

// for (key in user) {
// 	console.log(`${key}: ${user[key]}`);
// }

// One of the fundamental differences of objects vs primitives
// is that they are stored and copied “by reference”.

/*let user = { name: "John" };

let admin = user; // copy the reference

delete admin.name;

console.log( user.name );

admin.name = "Elliot";
console.log( user);
// Two objects are equal only if they are the same object.

console.log( user == admin );
console.log( user == {name: "Elliot"});
*/

// An object declared as const can be changed

/*const user = { name: "Elliot" };
user.name = "Mark" ; // That's fine
user = { name: "Mark" } // That's where I draw the line
*/


// How to clone
/*
let clone = {}; // the new empty object
let user = makeUser('elliot', 23);

// // let's copy all user properties into it
// for (let key in user) {
//   clone[key] = user[key];
// }

// console.log( clone == user );

// Or use Object.assign();

Object.assign(clone, user);
console.log( clone );
console.log( user );
console.log( clone == user);

// Can assign multiple things
user = makeUser('elliot', 23);
clone = {};
let permissions = { canView: true };
Object.assign( clone, user, permissions );
console.log( clone );

*/
// Cloning 
// let user = makeUser('elliot', 23);
// let clone = Object.assign({}, user);

