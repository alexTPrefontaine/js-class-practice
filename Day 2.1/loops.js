console.log("=================== while loop ====================")

// While Loop


var maxNumber = 10;
var i = 15;

// 
// while (i < maxNumber) {
//     console.log(i);
//     i = i + 1; //i++ or ++i
// }

// Practice question
while (i < maxNumber) {
    i = i + 1; //i++ or ++i or i += 1
    console.log(i);
}

// Pattern mostly seen/used
// var x = something; //initialisation
// while (condition) {
//     console.log(i); //Your block of code
//     i = i + 1; //i++ or ++i // Inc-dec
// }


console.log("=================== Do while loop ====================")
// do-while loop

// initialisation
// do {
//     Block of code
//      inc/dec
// }
// while(condition)


i = 15; // initialisation
do {
    console.log(i);
    i = i + 1; // inc - dec
} while (i < maxNumber) // condition

console.log("=================== For loop ====================")
// for loop

for (i = 0; i < maxNumber; i++) {
    console.log(i);
}




