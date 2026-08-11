// ========== IF STATEMENT ==========
// The code inside the if block ONLY runs if the condition is TRUE
// If the condition is false, the code is skipped

// Ask user to input their age and convert it to a number
// var age = parseInt(prompt("Enter age : "));

// EXAMPLE 1: Basic if statement with curly braces
// if (age >= 18) {
//   console.log("eligible");  // This message only prints if age is 18 or more
// }

// EXAMPLE 2: Single-line if statement (same as above, just shorter syntax)
// if (age >= 18) console.log("eligible");

// ========== ELSE STATEMENT ==========
// The code inside the else block runs ONLY when the if condition is FALSE
// Think of it as: "if that condition wasn't true, then do this instead"

// EXAMPLE 3: Using if and else together
// if (age >= 18) {
//   console.log("eligible");
// } else {
//   console.log("Not Eligible");  // This runs only if age is less than 18
// }

// EXAMPLE 4: Single-line if-else
// if (age >= 18) console.log("eligible");
// else console.log("Not Eligible");

// ========== ELSE IF STATEMENT ==========
// Use this when you have multiple conditions to check
// It checks each condition in order and stops at the first true one

// EXAMPLE 5: Multiple conditions with else if
// if (age >= 60) {
//   console.log("Not Fit");       // Runs if age is 60 or more
// } else if (age >= 18) {
//   console.log("eligible");      // Runs if age is 18-59
// } else {
//   console.log("Not Eligible");  // Runs if age is less than 18
// }

// ========== NESTED IF STATEMENTS ==========
// "Nested" means putting if statements INSIDE other if statements
// Use this when you need to check multiple conditions that all must be true

// EXAMPLE 6: Nested if statements (checking multiple conditions)
// var goodCreditScore = false;  // Person does NOT have good credit
// var goodSalary = true;         // Person DOES have good salary

// if (goodCreditScore) {  // First, check if credit score is good
//   // Only if the above is true, check the salary
//   if (goodSalary) {
//     console.log("Loan Approved");        // Runs only if BOTH are true
//   } else {
//     console.log("Insufficient Salary");  // Runs if credit is good but salary isn't
//   }
// } else {
//   // This runs if credit score is NOT good (we don't even check salary)
//   console.log("Not Eligible For Loan");
// }
