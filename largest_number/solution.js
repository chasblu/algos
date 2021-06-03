
// const array = []
// const largestNumber = (num) => {
//     if (num === 0 ) {
//         return 0;
//     }else if (num < 0 ) {
//         for (let i = 0; i < Math.abs(num); i++) {
//             array
            
//         }
//     } else
    
//     { for (let i = 0; i < num; i++) {
//         const string = num.toString();
//         array.push('9')    
//     }
//     array.join('')
//         console.log(array)
//     }
// }


const largestNumber = (num) => {
    if (num === 0) {
        return 0
    } else if (num > 0){
        const string = '9'
    let stringNum = string.repeat(Math.abs(num))
    return parseInt(stringNum)
} else {
    return parseFloat("." + "9".repeat(Math.abs(num)))
    
}
}

largestNumber(3)
largestNumber(-3)

// const largestNumber = num => num > 0? Number("9".repeat(num)): num === 0 ? 0 : Number(`0.${"9".repeat(Math.abs(num))}`);