// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// Examples
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

function detectWord(str) {
	let character = str.split('');
    function isLowerCase(char) {
        if (char === char.toLowerCase())
        return char
    }
    filterItems = character.filter(isLowerCase)
    return filterItems.join('')
}
function detectWord(str) {
	let character = str.split('');
    
    filterItems = character.filter((char) => char === char.toLowerCase)
    return filterItems.join('')
}


