console.log("JS file working fine")


//Logical operators

// AND - &&

var foo = 5;
var bar = 10;

if (foo > 2 && bar > 15) {
    console.log("AND condition is true");
}
else {
    console.log("AND condition is false");
}

// OR - ||

if (foo > 2 || bar > 15) {
    console.log("OR condition is true");
}
else {
    console.log("OR condition is false");
}


// NOT - !

var foobar = true;
var num = 6;

if (!(num == 5)) {
    console.log("Im in true section");
}
else {
    console.log("Im in false section");
}


// Example
(!(num == 6))
    (!false)
    (true)

    // Ex 2
    (!num == 6)
false == 6
false

// Ex 3
if (!num) {
    console.log("true");
}
else {
    console.log("false");
}






// maths - BODMAS - Bracket Off Div Mul Add SUbtraction
// 2 * (2 + 2) 
// 2 * 4
// 8

// 2 * 2 + 2
// 4 + 2
// 6

// Examples
// foo = 0; // False

// foo = null; // False

// foo = undefined; // Falsee

// foo = ""; // False

// foo = -5; // True

if (foo) {

}

if (foo) {
    console.log("true");
}
else {
    console.log("false");
}