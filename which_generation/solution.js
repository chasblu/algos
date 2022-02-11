// Which Generation Are You?

// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"
// Notes
// Check the Resources tab for helpful hints.

// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter

function generation(x, y) {
    let output;
	if (y === "f" && x === -3) {
        output = "great grandmother"
    } else if (y === "f" && x === -2 ) {
        output ="grandmother"
    } else if (y === "f" && x === -1 ) {
        output ="mother"
    } else if (y === "f" && x === 0 ) {
        output ="me"
    } else if (y === "f" && x === 1 ) {
        output ="daughter"
    } else if (y === "f" && x === 2 ) {
        output ="granddaughter"
    } else if (y === "f" && x === 3 ) {
        output ="great granddaughter"
    } else if (y === "m" && x === -3) {
        output = "great grandfather"
    } else if (y === "m" && x === -2 ) {
        output ="grandfather"
    } else if (y === "m" && x === -1 ) {
        output ="father"
    } else if (y === "m" && x === 0 ) {
        output ="me"
    } else if (y === "m" && x === 1 ) {
        output ="son"
    } else if (y === "m" && x === 2 ) {
        output ="grandson"
    } else if (y === "m" && x === 3 ) {
        output ="great grandson"
    } 
    return output;
}

function generation(x,y) {
    const genNum = {
      '-3': { m: "great grandfather", f: "great grandmother" },
      "-2": { m: "grandfather", f: "grandmother" },
      "-1": { m: "father", f: "mother" },
      0: { m: "me!", f: "me!" },
      1: { m: "son", f: "daughter" },
      2: { m: "grandson", f: "granddaughter" },
      3: { m: "great grandson", f: "great granddaughter" },
    };
        return genNum[x][y]
    }