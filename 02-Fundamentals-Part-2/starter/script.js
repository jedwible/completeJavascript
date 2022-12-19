function logger() {
    // console.log("My name is jonas");
}

logger();

// console.log(fruitProcessor(5, 4))
// console.log(calcAge1(34))
// console.log(calcAge2(57))

// function declaration
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and  ${oranges}`
    return juice
}


//function expression
function calcAge1(birthYear) {
    return 2037 - birthYear
}

const age = calcAge1(20)
// console.log(age)

constcalcAge2 = function (birthYear) {
    return 2037 - birthYear
}


//Arrow functions

// regular declatation
function calcAge1(birthYear) {
    return 2037 - birthYear
}

//arrow
const calcage3 = birthYear => 2037 - birthYear
const age3 = calcage3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, fName) => {
    const age = 2037 - birthYear
    const retirment = 65 - age
    //return retirment
    return `${fName} retires in ${retirment}`
}

console.log(yearsUntilRetirement(1991, 'bob'))
console.log(yearsUntilRetirement(1996, 'Tom'))



