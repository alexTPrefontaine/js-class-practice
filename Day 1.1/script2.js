var foo = 5;
var bar = 7;

console.log("The sum of both the numbers is" + (foo + bar) + " in older way");
console.log(`The sum of both the numbers is  ${foo + bar} in newer way`);


// Control statements

// if ( condition ) { code }

// If condition
if (foo + bar > 15) {
    console.log("Yaaayyyy");
}

// If else

if (foo + bar > 15) {
    console.log("Yaaayyyy");
}
else {
    console.log("Nooooooo");
}

var age = 50;

// If else if
if (age < 20) {
    console.log("Cannot drink");
}
else if (age >= 20 && age < 40) {
    console.log("Can drink");
}
else {
    console.log("Can drink but not recommended")
}
