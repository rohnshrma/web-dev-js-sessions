/*
================================================================================
                     JAVASCRIPT DATA TYPES AND STRINGS
================================================================================
This file covers fundamental concepts in JavaScript including data types and
string manipulation using built-in methods.
================================================================================
*/

// ============================================================================
// SECTION 1: PRIMITIVE DATA TYPES
// ============================================================================
// JavaScript has several primitive (basic) data types that represent single values:

// 1. STRING - A sequence of characters used to represent text
//    Examples: "hello", 'world', `template string`

// 2. NUMBER - Represents numeric values (integers and decimals)
//    Examples: 42, 3.14, -10, Infinity, NaN

// 3. BOOLEAN - Represents true or false values
//    Used for logical operations and control flow

// 4. UNDEFINED - A variable declared but not assigned any value
//    This is an UNINTENTIONAL absence of value (accident)
//    Example: let x; (x is undefined)

// 5. NULL - Explicitly set to represent the intentional absence of value
//    This is an INTENTIONAL absence of value (purposeful)
//    Example: let y = null;

// Symbol and BigInt are also primitives but less commonly used in basics


// ============================================================================
// SECTION 2: REFERENCE DATA TYPES
// ============================================================================
// These are complex data types that store references to values in memory:

// 1. ARRAY - An ordered collection of values
//    Example: [1, 2, 3] or ["apple", "banana", "orange"]

// 2. OBJECT - A collection of key-value pairs
//    Example: {name: "John", age: 30, city: "NYC"}

// 3. FUNCTION - A reusable block of code
//    Example: function greet(name) { return "Hello " + name; }


// ============================================================================
// SECTION 3: UNDERSTANDING STRINGS
// ============================================================================

// A STRING is a sequence of characters enclosed in quotes.
// You can use three types of quotes:
// - Single quotes: 'hello'
// - Double quotes: "hello"
// - Backticks: `hello` (allows template literals with variables)

// The typeof KEYWORD returns the data type of a value as a string
// It helps us verify what type of data we're working with
console.log(typeof "hello world");  // Output: "string"
console.log(typeof 42);             // Output: "number"
console.log(typeof true);           // Output: "boolean"


// ============================================================================
// SECTION 4: USER INPUT AND TYPE CONVERSION
// ============================================================================

// IMPORTANT NOTE: Values taken from prompt() are ALWAYS strings by default,
// even if the user enters numbers!

// Example of taking user input (commented out for now):
// var first_name = prompt("Enter first name : ");      // Returns a STRING
// var last_name = prompt("Enter last name : ");        // Returns a STRING
// var age = Number(prompt("Enter age :"));             // Converts string to NUMBER using Number()
// var age = parseInt(prompt("Enter age :"));           // Alternative: converts to integer
// var height = parseFloat(prompt("Enter height :"));   // Converts to decimal number

// Define some sample variables for demonstration
var yourname = "john doe";
var age = 34;
var height = 1.8;

// You can use typeof to check what type each variable is:
// console.log(typeof yourname);  // "string"
// console.log(typeof age);       // "number"
// console.log(typeof height);    // "number"


// ============================================================================
// SECTION 5: ARITHMETIC AND STRING CONCATENATION
// ============================================================================

// When you use the + operator with NUMBERS, it adds them:
// console.log(23 + 23);                    // Output: 46 (arithmetic addition)

// When you use + with STRINGS, it concatenates (joins) them:
// console.log("23" + "23");                // Output: "2323" (string concatenation)

// When you mix STRING and NUMBER with +, JavaScript converts to STRING:
// console.log("23" + 23);                  // Output: "2323" (both treated as strings)

// To force a string to be treated as a number, use unary operators:
// console.log(+"23" + 23);                 // Output: 46 (unary + converts "23" to 23)
// console.log(-"23" + 23);                 // Output: 0 (unary - converts "23" to 23 and negates)


// ============================================================================
// SECTION 6: CONCATENATION - COMBINING STRINGS
// ============================================================================

// Old way: Using the + operator to join strings together
// console.log("my name is " + "john doe");  // Output: "my name is john doe"


// ============================================================================
// SECTION 7: TEMPLATE LITERALS / STRING TEMPLATES (MODERN APPROACH)
// ============================================================================

// Template literals use BACKTICKS ` ` instead of quotes
// They allow you to:
// 1. Include variables and expressions using ${} syntax
// 2. Include multiple lines without special characters
// 3. Make code more readable

// This is much cleaner than concatenation:
console.log(
  `hello my name is ${yourname} and i am ${age} year old and ${height} meters tall.`
);
// Output: "hello my name is john doe and i am 34 year old and 1.8 meters tall."


// ============================================================================
// SECTION 8: STRING INDEXING (ACCESSING INDIVIDUAL CHARACTERS)
// ============================================================================

// Each character in a string has an INDEX (position)
// Example: the string "hello" looks like this:
//
//    h    e    l    l    o
//  Index:  0    1    2    3    4     (positive indexing: left to right)
//  Count:  1    2    3    4    5     (length/count: 1-based)
//  Index: -5   -4   -3   -2   -1     (negative indexing: right to left)

// Use square brackets [] to access a character at a specific index
// console.log("hello"[0]);  // Output: "h" (first character)
// console.log("hello"[1]);  // Output: "e" (second character)
// console.log("hello"[-1]); // Output: undefined (negative indexing not directly supported with [])

var txt = "hello world";  // This string has 11 characters (indices 0-10)


// ============================================================================
// SECTION 9: STRING METHODS - CASE CONVERSION
// ============================================================================

// toUpperCase() - Converts all characters to uppercase
console.log(txt.toUpperCase());
// Output: "HELLO WORLD"

// toLowerCase() - Converts all characters to lowercase
console.log(txt.toLowerCase());
// Output: "hello world"


// ============================================================================
// SECTION 10: STRING METHODS - CHARACTER RETRIEVAL
// ============================================================================

// charAt(index) - Returns the character at a specific index (positive only)
console.log(txt.charAt(2));   // Output: "l" (character at index 2)
console.log(txt.charAt(-2));  // Output: "" (negative index returns empty string)

// at(index) - Modern method that supports both positive and negative indices
// Positive indices count from left (0 is first character)
// Negative indices count from right (-1 is last character)
console.log(txt.at(2));       // Output: "l" (character at index 2 from left)
console.log(txt.at(-2));      // Output: "l" (second character from right)


// ============================================================================
// SECTION 11: STRING METHODS - SEARCHING AND CHECKING
// ============================================================================

// includes(searchString, startIndex) - Checks if string contains a substring
// Returns true if found, false if not
console.log(txt.includes("e"));      // Output: true (found at index 1)
console.log(txt.includes("e", 5));   // Output: false (not found after index 5)

// startsWith(searchString, startIndex) - Checks if string starts with given text
console.log(txt.startsWith("h"));    // Output: true (starts with "h")
console.log(txt.startsWith("h", 5)); // Output: false (doesn't start with "h" at index 5)

// endsWith(searchString, length) - Checks if string ends with given text
console.log(txt.endsWith("d"));      // Output: true (ends with "d")
console.log(txt.endsWith(" ", 6));   // Output: true (has space at position 6)


// ============================================================================
// SECTION 12: STRING METHODS - REPLACING TEXT
// ============================================================================

// replace(searchValue, newValue) - Replaces FIRST occurrence only
console.log(txt.replace("o", "x"));  // Output: "hellx world" (only first "o" replaced)

// replace() with regex and /g flag - Replaces ALL occurrences
// /o/g means: find all "o" characters (g = global flag)
console.log(txt.replace(/o/g, "x")); // Output: "hellx wxrld" (all "o" replaced)

// replaceAll(searchValue, newValue) - Modern method that replaces ALL occurrences
console.log(txt.replaceAll("o", "x")); // Output: "hellx wxrld"


// ============================================================================
// SECTION 13: STRING METHODS - TRIMMING WHITESPACE
// ============================================================================

// trim() - Removes whitespace from BOTH ends of the string
console.log("         hello world       ".trim());
// Output: "hello world" (spaces removed from start and end)

// trimStart() or trimLeft() - Removes whitespace from the START only
console.log("         hello world       ".trimStart());
// Output: "hello world       " (spaces removed only from start)

// trimEnd() or trimRight() - Removes whitespace from the END only
console.log("         hello world       ".trimEnd());
// Output: "         hello world" (spaces removed only from end)


// ============================================================================
// SECTION 14: STRING METHODS - PADDING (ADDING CHARACTERS)
// ============================================================================

// padStart(targetLength, padString) - Adds characters to the START
// Makes string at least targetLength characters long
console.log(txt.padStart(20));           // Output: "         hello world" (padded with spaces to length 20)
console.log(txt.padStart(20, "*-"));     // Output: "*-*-*-*-hello world" (padded with "*-" pattern)

// padEnd(targetLength, padString) - Adds characters to the END
console.log(txt.padEnd(20, "*-"));       // Output: "hello world*-*-*-*-" (padded to length 20)

// You can chain multiple methods together
console.log(txt.padStart(20, "*-").padEnd(29, "-*"));
// Output: "*-*-*-*-hello world-*-*-*-*-" (padded on both sides)


// ============================================================================
// SECTION 15: STRING METHODS - REPETITION AND SEARCHING
// ============================================================================

// repeat(count) - Repeats the string a specified number of times
console.log(txt.repeat(2));
// Output: "hello worldhello world" (repeated 2 times)

// indexOf(searchValue, fromIndex) - Finds FIRST occurrence of substring
// Returns the index (position) or -1 if not found
console.log(txt.indexOf("o"));        // Output: 4 (first "o" at index 4)
console.log(txt.indexOf("o", 5));     // Output: 7 (first "o" found after index 5)

// lastIndexOf(searchValue, fromIndex) - Finds LAST occurrence of substring
console.log(txt.lastIndexOf("o"));    // Output: 7 (last "o" at index 7)
console.log(txt.lastIndexOf("o", 5)); // Output: 4 (last "o" found before/at index 5)


// ============================================================================
// SECTION 16: STRING METHODS - COMBINING AND PATTERN MATCHING
// ============================================================================

// concat(...strings) - Joins multiple strings together
// Similar to using + operator but more readable when joining many strings
console.log(txt.concat(" my name is john", " i am an idiot"));
// Output: "hello world my name is john i am an idiot"

// match(searchValue) - Searches for pattern matches and returns details
// Usually used with regular expressions for more complex patterns
console.log(txt.match("o"));   // Output: ['o', index: 4, input: 'hello world', groups: undefined]

// search(searchValue) - Finds index of first match (returns -1 if not found)
console.log(txt.search("o"));  // Output: 4 (index where "o" is found)


// ============================================================================
// SECTION 17: PRACTICE TASKS
// ============================================================================
/*

TASK 1: String Creation and Type Checking
----------------------------------------------
1. Create a variable called 'city' and assign it your favorite city name
2. Create a variable called 'population' and assign it a number
3. Use console.log to print the typeof each variable
4. Use template literal to print: "I live in [city] with a population of [population]"

Expected Output:
city is a string
population is a number
I live in [city] with a population of [population]


TASK 2: User Input Simulation
----------------------------------------------
1. Uncomment the prompt() examples above and run this file
2. Try entering a number as your age - check what type it becomes
3. Notice how Number() converts it to an actual number
4. What would happen if you do arithmetic with a string vs actual number?


TASK 3: Case Conversion
----------------------------------------------
1. Create a string variable with mixed case: "Hello WoRld"
2. Print the string in all uppercase
3. Print the string in all lowercase
4. Create a sentence: "the quick brown fox jumps over the lazy dog"
   Convert it to uppercase and print it


TASK 4: Character Access Using Indexing
----------------------------------------------
1. Create a string: "javascript"
2. Print the character at index 0 (first character)
3. Print the character at index 4
4. Print the character at index -1 (last character) using .at()
5. Print the character at index -3 (third from end) using .at()


TASK 5: String Searching Methods
----------------------------------------------
1. Create a string: "I love learning JavaScript"
2. Check if the string includes "love" - print true/false
3. Check if the string includes "hate" - print true/false
4. Check if it starts with "I love"
5. Check if it ends with "Script"
6. Check if it starts with "love" (should be false)


TASK 6: Finding Character Positions
----------------------------------------------
1. Create a string: "banana"
2. Find the index of the first 'a' using indexOf()
3. Find the index of the last 'a' using lastIndexOf()
4. Find the index of 'n' (should return 2)
5. Try searching for a character that doesn't exist - what does it return?


TASK 7: String Replacement
----------------------------------------------
1. Create a string: "I like cats and cats are cute"
2. Replace only the first "cats" with "dogs"
3. Replace all "cats" with "dogs" using replaceAll()
4. Use replace with regex to replace all spaces with underscores


TASK 8: Trimming and Padding
----------------------------------------------
1. Create a string with spaces: "   hello   "
2. Use trim() to remove all spaces
3. Use trimStart() to remove only start spaces
4. Use trimEnd() to remove only end spaces
5. Create a string "code" and pad it to length 10 with "*" on start
6. Pad it to length 15 with "-" on the end


TASK 9: String Repetition and Combining
----------------------------------------------
1. Create a string: "ha"
2. Repeat it 5 times using repeat()
3. Create another string: "world"
4. Combine "hello " with "world" using concat()
5. What's the difference between concat() and using +?


TASK 10: Complex Combination Task
----------------------------------------------
1. Create two variables: firstName = "john" and lastName = "doe"
2. Using template literal, create: "My name is JOHN DOE" (uppercase last name)
3. Create a string with lots of spaces: "   i am learning javascript   "
4. Trim it, then convert to uppercase
5. Find where the character 'a' appears (all occurrences)
6. Pad the trimmed string to length 30 with "=" on start and "-" on end


BONUS CHALLENGES:
----------------------------------------------
1. Create a function that counts how many times a character appears in a string
   Hint: Use a loop and check each character

2. Create a password validator that checks:
   - Password includes uppercase letters
   - Password includes numbers
   - Password is at least 8 characters long
   Hint: Use includes(), length property, and regular expressions

3. Create a simple censoring function that replaces vowels with '*'
   Example: "hello" -> "h*ll*"
   Hint: Use replace() or replaceAll() multiple times

4. Create a string reversal function
   Example: "hello" -> "olleh"
   Hint: Think about negative indexing with .at()

*/
