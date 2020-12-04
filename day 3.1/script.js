console.log("JS file working fine")


// String indexes
var name = "something";

// length = 9
// indexes go from 0 to 8

for (var i = 0; i < name.length; i++) {
    console.log(`the character at index ${i} is ${name[i]}`)
}

//  Practice question

// Reverse a string
// Input  = "abc de"
// Output = "ed cba"


// var reversed = "";
var reversed = "";
for (let i = name.length - 1; i >= 0; i--) {
    reversed += name[i];
    // Same as
    // reversed = reversed + name[i];
}
console.log(reversed);