console.log("JS file working fine")


var foo = 5;
var bar = 3;
var foobar = 7;
var calc = 0;

calc = (++foo) + (bar--) + (--foobar);

console.log(foo);
console.log(bar);
console.log(foobar);
console.log(calc);



// Functions in Functions

function calculator(num1, num2) {

    var sum = num1 + num2;


    display(sum);

    sum += 10;

    display(sum);


    // Function inside another function
    function display(number) {
        console.log("************************************");
        console.log(`Sum = ${number}`);
        console.log("************************************");
    }
}

calculator(50, 100);
// display(200); Not accessible here



// Functions in Functions
function calculator(num1, num2) {

    var sum = num1 + num2;


    display(sum);

    sum += 10;

    display(sum);


    // Function inside another function
    function display(number) {
        console.log("************************************");
        console.log(`Sum = ${number}`);
        console.log("************************************");
    }
}


function power(a, b) {
    var pw = 1;
    for (var i = 0; i < b; i++) {
        pw *= a;
    }
    print(pw);

    function print(num) {
        stars();
        console.log(`Number ${a} in a power of ${b} = ${num}`);
        stars();

        function stars() {
            console.log("******************************");
        }
    }
}

power(2, 3);