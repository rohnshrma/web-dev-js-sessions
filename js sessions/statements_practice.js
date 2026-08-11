// ========== BEGINNER PRACTICE TASKS ==========
// These tasks are designed to help you practice:
// 1. FOR loops
// 2. WHILE loops
// 3. IF-ELSE statements
// 4. Working with NUMBERS and STRINGS
//
// Instructions:
// - Write code to solve each task
// - Test your code by running it
// - Try to complete all 40 tasks!

// ===== FOR LOOP TASKS (Tasks 1-15) =====

// TASK 1: Print numbers from 1 to 10
// Expected output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// TASK 2: Print even numbers from 2 to 20
// Expected output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// Hint: Use i += 2 in the for loop

// TASK 3: Print numbers from 50 to 40 (count down)
// Expected output: 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40

// TASK 4: Calculate the sum of numbers from 1 to 10
// Expected output: 55
// Hint: Use a variable to keep track of the sum

// TASK 5: Print the multiplication table of 7 (7 x 1 to 7 x 10)
// Expected output:
// 7 x 1 = 7
// 7 x 2 = 14
// ... and so on

// TASK 6: Find the largest number from a given number
// var numbers = [5, 12, 3, 45, 8];  <- DO NOT USE ARRAYS! Instead, use individual numbers
// Create: var num1 = 5; var num2 = 12; var num3 = 3; var num4 = 45; var num5 = 8;
// Then use a loop logic to find max
// Expected output: 45

// TASK 7: Print the factorial of 5
// (Factorial means: 5 x 4 x 3 x 2 x 1)
// Expected output: 120

// TASK 8: Print each character of the string "JAVASCRIPT"
// Expected output: J A V A S C R I P T (each on new line)

// TASK 9: Print a string 10 times
// var message = "Hello World";
// Expected output: "Hello World" printed 10 times

// TASK 10: Count how many characters are in the string "Programming"
// Expected output: 11

// TASK 11: Print numbers from 1 to 20, but print "EVEN" if even, "ODD" if odd
// Expected output:
// 1 - ODD
// 2 - EVEN
// 3 - ODD
// ... and so on

// TASK 12: Create a pattern of stars (5 rows)
// Expected output:
// *
// * *
// * * *
// * * * *
// * * * * *

// TASK 13: Calculate the sum of all odd numbers from 1 to 30
// Expected output: 225

// TASK 14: Find how many times the letter "e" appears in "computer science"
// Expected output: 4

// TASK 15: Print a countdown timer from 10 to 1
// Expected output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Blastoff!

// ===== WHILE LOOP TASKS (Tasks 16-30) =====

// TASK 16: Print numbers from 1 to 10 using while loop
// Expected output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// TASK 17: Keep adding numbers until you reach 100
// Start with 0, add 5 each time, print how many times you added
// Expected output: You added 20 times to reach at least 100

// TASK 18: Ask user to enter a number, print "Too small" until they enter a number >= 50
// var num = 30;  // Simulate user input
// Keep asking (in a loop) until they enter >= 50

// TASK 19: Print numbers while they are less than or equal to 15
// var num = 1;
// Expected output: 1, 2, 3, 4, 5, ... 15

// TASK 20: Keep doubling a number (starting at 1) until it reaches or exceeds 100
// Print how many times you doubled it
// Expected output: You doubled 7 times to reach 128

// TASK 21: Count how many times you need to divide 1000 by 2 to get below 1
// Expected output: 10

// TASK 22: Keep asking user for a password until they enter "Secret123"
// var password = "wrong";  // Simulate user input
// Loop should keep asking while password is wrong

// TASK 23: Print "Yes" 5 times using a while loop (not for loop)
// Expected output: Yes, Yes, Yes, Yes, Yes

// TASK 24: Create a string by adding a character "A" five times using while loop
// Expected output: AAAAA
// Hint: var result = ""; then keep adding "A" to it

// TASK 25: Count from 0 to 50, but skip every multiple of 5
// var num = 0;
// Expected output: 0, 1, 2, 3, 4, 6, 7, 8, 9, 11, ... (skip 5, 10, 15, 20, etc)
// Hint: Use continue statement or if condition to skip

// TASK 26: Find the first number greater than 100 by multiplying 2 each time
// Start with 1: 1, 2, 4, 8, 16, 32, 64, 128
// Expected output: 128

// TASK 27: Count how many even numbers are there from 1 to 50
// Expected output: 25

// TASK 28: Keep subtracting 3 from 50 until you reach below 10
// Print the final number
// Expected output: 2

// TASK 29: Build a string by adding numbers: "1", "2", "3", ... "10"
// Expected output: "12345678910"

// TASK 30: Print digits of a number one by one
// var num = 12345;
// Expected output: 1, 2, 3, 4, 5
// Hint: Convert to string first

// ===== IF-ELSE STATEMENT TASKS (Tasks 31-40) =====

// TASK 31: Check if a number is positive, negative, or zero
// var num = 10;
// Expected output: "10 is positive"

// TASK 32: Check if a number is even or odd
// var num = 7;
// Expected output: "7 is odd"

// TASK 33: Check if a string is empty or not
// var str = "Hello";
// Expected output: "String is not empty"

// TASK 34: Grade calculator - Assign grade based on marks
// var marks = 85;
// 90-100: A, 80-89: B, 70-79: C, 60-69: D, Below 60: F
// Expected output: "Your grade is B"

// TASK 35: Age checker - Determine if person can vote
// var age = 25;
// Can vote if age >= 18
// Expected output: "You can vote"

// TASK 36: Check if a number is between 1 and 100
// var num = 50;
// Expected output: "50 is between 1 and 100"

// TASK 37: Check if a string contains the word "JavaScript"
// var text = "I love JavaScript programming";
// Hint: Use .includes() method
// Expected output: "Text contains JavaScript"

// TASK 38: Nested if-else - Check eligibility for a loan
// var age = 25;
// var income = 50000;
// Eligible if age >= 21 AND income >= 30000
// Expected output: "You are eligible for a loan"

// TASK 39: Check if a year is a leap year
// var year = 2024;
// Leap year if divisible by 4 (and if divisible by 100, must also be divisible by 400)
// Expected output: "2024 is a leap year"

// TASK 40: Login checker - Check username and password
// var username = "admin";
// var password = "1234";
// Correct username: "admin", correct password: "1234"
// Expected output: "Login successful" (if both match) or "Login failed" (if either doesn't match)

// ===== END OF PRACTICE TASKS =====
// Congratulations! If you've completed all 40 tasks, you have a solid understanding of
// loops and conditional statements in JavaScript!
