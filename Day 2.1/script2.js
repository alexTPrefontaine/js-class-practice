// Ternary operator ?:
var age = 20;
var hasLicense = true;


// If-else
if (age >= 20) {
    if (hasLicense) {
        console.log("You can drive");
    }
    else {
        console.log("You cannot drive");
    }

}
else {
    console.log("You cannot drive");
}

// Ternary operator
age >= 20 ? (hasLicense ? console.log("You can drive") : console.log("You cannot drive")) : console.log("cannot vote");
// Condition ? True block of code : False block of code



var category = (age >= 20 ? "can drive" : "cannot drive");
console.log(category);