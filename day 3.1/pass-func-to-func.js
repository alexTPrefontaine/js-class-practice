var dollarPrinter = function () {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$");
}

var starPrinter = function () {
    console.log("*************************");
}

// num1 - Number
// num2 - Number
// printer - Function
function powerInVarFunction(num1, num2, myPrinter) {
    var result = 1;
    for (var i = 0; i < num2; i++) {
        result *= num1;
    }
    myPrinter();
    return result;
}

console.log(powerInVarFunction(2, 3, starPrinter));

console.log(powerInVarFunction(5, 3, dollarPrinter));


// var result = powerInVarFunction(2, 3);
// console.log(result);




function hasEnoughPlayers(list) {
    return (list.length >= 7 ? true : false);

    var result = list.length >= 7 ? true : false;
    return result;
}