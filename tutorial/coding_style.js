
// Coding style

// How to space functions:

if (condition) {
  // do this
  // ...and that
  // ...and that
}

/*
Go back to this webiste for some good style guides

https://javascript.info/coding-style
*/


// Eventually use ESLint


function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 0) {
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}


// Can look into https://en.wikipedia.org/wiki/JSDoc