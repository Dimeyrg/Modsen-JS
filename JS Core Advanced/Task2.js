"use strict";

console.log(a); // undefined (hoisting)
var a = 5;

try {
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
} catch (error) {
    console.error(error);
}
let b = 10;

try {
    console.log(c); // ReferenceError: Cannot access 'c' before initialization
} catch (error) {
    console.error(error);
}
const c = 15;