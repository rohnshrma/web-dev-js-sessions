// ========== ARITHMETIC OPERATORS ==========
// These operators perform basic math calculations

// Addition: adds two numbers together
console.log(12 + 21);  // Result: 33

// Subtraction: subtracts the second number from the first
console.log(12 - 21);  // Result: -9

// Multiplication: multiplies two numbers
console.log(12 * 21);  // Result: 252

// Division: divides the first number by the second
console.log(12 / 21);  // Result: 0.571...

// Modulus (Remainder): gives the remainder after division
console.log(12 % 21);  // Result: 12 (12 divided by 21 leaves remainder 12)

// Exponentiation: raises first number to the power of the second
console.log(12 ** 21);  // Result: huge number (12 to the power of 21)

// ========== ASSIGNMENT OPERATORS ==========
// These operators assign values and perform operations at the same time
// They are shortcuts that make code shorter

// Create a variable x and assign it the value 10
var x = 10;
console.log(x);  // Prints: 10

// += : Add to the current value and reassign
// x += 10 is the same as: x = x + 10
x += 10;  // x becomes 20
console.log(x);  // Prints: 20

// -= : Subtract from the current value and reassign
// x -= 10 is the same as: x = x - 10
x -= 10;  // x becomes 10
console.log(x);  // Prints: 10

// *= : Multiply the current value and reassign
// x *= 10 is the same as: x = x * 10
x *= 10;  // x becomes 100
console.log(x);  // Prints: 100

// /= : Divide the current value and reassign
// x /= 2 is the same as: x = x / 2
x /= 2;  // x becomes 50
console.log(x);  // Prints: 50

// %= : Get remainder and reassign
// x %= 2 is the same as: x = x % 2
x %= 2;  // x becomes 0 (50 divided by 2 has no remainder)
console.log(x);  // Prints: 0

// **= : Raise to power and reassign
// x **= 10 is the same as: x = x ** 10
x **= 10;  // x becomes 0 (0 to any power is 0)
console.log(x);  // Prints: 0

// ========== COMPARISON OPERATORS (Equal/Not Equal) ==========

// == : Loose equals (compares VALUE only, ignores data type)
console.log(12 == 12);   // Prints: true (both are the number 12)
console.log(12 == "12"); // Prints: true (12 equals the string "12" when comparing values only)

// === : Strict equals (compares both VALUE and DATA TYPE)
// This is safer and recommended - use this one!
console.log(12 === 12);   // Prints: true (both are number 12)
console.log(12 === "12"); // Prints: false (number 12 is NOT strictly equal to string "12")

// != : Loose not equals (compares VALUE only)
console.log(12 != 11);   // Prints: true (12 is not equal to 11)
console.log(12 != "12"); // Prints: false (12 and "12" are equal when comparing values only)

// !== : Strict not equals (compares both VALUE and DATA TYPE)
// This is safer and recommended - use this one!
console.log(12 !== 13);   // Prints: true (12 is not strictly equal to 13)
console.log(12 !== "12"); // Prints: true (number 12 is not strictly equal to string "12")

// ========== COMPARISON OPERATORS (Greater/Less Than) ==========

// > : Greater than
console.log(12 > 10);   // Prints: true (12 is greater than 10)

// < : Less than
console.log(12 < 10);   // Prints: false (12 is NOT less than 10)

// >= : Greater than or equal to
console.log(12 >= 10);  // Prints: true (12 is greater than 10)

// <= : Less than or equal to
console.log(12 <= 10);  // Prints: false (12 is NOT less than or equal to 10)

// ========== LOGICAL OPERATORS ==========

// && : AND operator (requires ALL conditions to be true)
// If any condition is false, the whole result is false
console.log(12 > 10 && 10 < 12);  // true && true = true (both conditions are true)
console.log(12 > 10 && 10 > 12);  // true && false = false (second condition is false)

// || : OR operator (requires AT LEAST ONE condition to be true)
// If all conditions are false, then result is false
console.log(12 > 10 || 10 < 12);  // true || true = true (both are true)
console.log(12 > 10 || 10 > 12);  // true || false = true (first condition is true, so result is true)

// ! : NOT operator (reverses/flips the boolean value)
// true becomes false, and false becomes true
console.log(!true);      // Prints: false (opposite of true)
console.log(!21 > 12);   // Prints: false (!21 is false, and false > 12 is false)
