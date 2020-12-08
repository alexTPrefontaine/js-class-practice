// Arrow operator use cases


const foo = [1, 2, 3, 4];

// ================ Using 1 param
foo.forEach(function (num) {
    // One or more lines of code
    return num;
});

foo.forEach((num) => {
    //One or more lines of code
    return num;
});

foo.forEach(num => {
    //One or more lines of code
    return num;
});

// if no curly brces only one line of code allowed and the value is returned automatically
foo.forEach((num) => num);


// ================ Using 2 param
foo.forEach(function (num1, num2) {
    // One or more lines of code
    return num1;
});

foo.forEach((num1, num2) => {
    //One or more lines of code
    return num;
});

// WRONG. CANNOT DO THIS.
foo.forEach(num1, num2 => {
    //One or more lines of code
    return num;
});

// if no curly brces only one line of code allowed and the value is returned automatically
foo.forEach((num1, num2) => num);


