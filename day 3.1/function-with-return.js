function power(num1, num2) {
    var result = 1;
    for (var i = 0; i < num2; i++) {
        result *= num1;
    }
    return result;
}


function main() {
    var result = power(2, 4);

    console.log(`result = ${result}`)
}

main();