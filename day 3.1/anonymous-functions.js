function power(num1, num2) {
    var result = 1;
    for (var i = 0; i < num2; i++) {
        result *= num1;
    }
    return result;
}

// Define anonymous functions
var powerInVarFunction = function (num1, num2) {
    var result = 1;
    for (var i = 0; i < num2; i++) {
        result *= num1;
    }
    return result;
}

var result = powerInVarFunction(2, 3);
console.log(result);

// Alternate
// console.log(powerInVarFunction(2, 3));