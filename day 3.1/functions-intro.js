var bar = 4;

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");
console.log("The program just started");
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");
if (bar > 2) {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log("true");
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");
}
else {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log("false");
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");

}
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");
console.log("The program ended");
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");

// Function  

// Defining the function
// customPrintString is a param
function customPrint(customPrintString) {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log(customPrintString);
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");
}


function main() {
    // Call of the functiomn
    customPrint("The program just started");

    if (bar > 2)
        customPrint("true");
    else
        customPrint("false");

    customPrint("The program ended");
}

main();