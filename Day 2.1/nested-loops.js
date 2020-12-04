// 0
// 01
// 012
// 0123

var row;
var col;
var output;

for (row = 0; row <= 3; row++) {
    output = "";
    for (col = 0; col < row + 1; col++) {
        output = output + col // wht we are printing
    }
    console.log(output);
}

// *
// **
// ***
// ****