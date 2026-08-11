// ========== LOOPS ==========
// Loops allow us to run the same code multiple times without writing it over and over

// ========== FOR LOOP ==========
// Syntax: for (START; STOP; STEP)
// START: where to begin (like var i = 1)
// STOP: when to stop looping (like i <= 20)
// STEP: how to change after each loop (like i += 1)

// EXAMPLE 1: Count from 1 to 20
// for (var i = 1; i <= 20; i += 1) {  // Start at 1, stop at 20, add 1 each time
//   console.log(i);  // Prints: 1, 2, 3, 4, ... 20
// }

// EXAMPLE 2: Count backwards from 20 to 0
// for (var i = 20; i >= 0; i -= 1) {  // Start at 20, stop at 0, subtract 1 each time
//   console.log(i);  // Prints: 20, 19, 18, 17, ... 0
// }

// EXAMPLE 3: Loop through each character in a string (forward)
// var txt = "hello world";
// for (var i = 0; i < txt.length; i += 1) {  // i < txt.length means loop until end of string
//   console.log(txt[i]);  // Prints each character: h, e, l, l, o, ...
// }

// EXAMPLE 4: Loop through each character in a string (backward)
// for (var i = txt.length - 1; i >= 0; i -= 1) {  // Start at last character, go backwards
//   console.log(txt[i]);  // Prints each character backwards: d, l, r, o, w, ...
// }

// ========== WHILE LOOP ==========
// Keeps running as long as a condition is TRUE
// Stops when the condition becomes FALSE

// EXAMPLE 5: Count from 0 to 10
// var i = 0;  // Create a counter starting at 0
// while (i <= 10) {  // Keep looping as long as i is 10 or less
//   console.log(i);  // Prints: 0, 1, 2, 3, ... 10
//   i += 1;  // Add 1 to i after each loop (IMPORTANT: don't forget this!)
// }

// EXAMPLE 6: Loop through each character in a string using while
// var i = 0;
// while (i < txt.length) {  // Keep looping while i is less than the string length
//   console.log(txt[i]);  // Print the character at position i
//   i += 1;  // Move to the next character
// }

// EXAMPLE 7: Keep asking for email until it's long enough
// var email = prompt("Enter email : ");
// while (email.length < 8) {  // Keep looping if email is less than 8 characters
//   email = prompt("Enter email : ");  // Ask again
// }
// // When loop exits, we know email has at least 8 characters
