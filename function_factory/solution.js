// Create a function that takes a "base number" as an argument. 
// This function should return another function which takes a new argument, 
// and returns the sum of the "base number" and the new argument.


// // Calling makePlusFunction(5) returns a new function that takes an input,
// // and returns the result when adding 5 to it.

// const plusFive = makePlusFunction(5)

// plusFive(2) ➞ 7

// plusFive(-8) ➞ -3

// // Calling makePlusFunction(10) returns a new function that takes an input,
// // and returns the result when adding 10 to it.

// const plusTen = makePlusFunction(10)

// plusTen(0) ➞ 10

// plusTen(188) ➞ 198

// plusFive(plusTen(0)) ➞ 15

function makePlusFunction(baseNum) {
	// make a new function that takes in and arg and adds it to baseNum
    function plusBaseNum(arg) {
        return baseNum + arg;
    }
    return plusBaseNum
}