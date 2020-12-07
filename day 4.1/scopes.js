var name = "John"; // Global scope
console.log(name); // accessible
// console.log(age); not accessible
// console.log(occupation);// not accessible

function intro() {
    var age = 18; // function scope

    console.log(name); // accessible
    console.log(age);// accessible

    if (age === 18) {
        var occupation = "student";
        console.log(name); // accessible
        console.log(age); // accessible
    }

    stars();

    // console.log(insideStars); //not accessible
    function stars() {
        var insideStars = "stars";

        var age = 20;
        console.log(`age inside the stars function is ${age}`);

        console.log("**************************");
        console.log(name); // accessible
        console.log(age); // accessible
    }

    console.log(`age outside the starts stars is ${age}`);
}

intro();









// console.log(name);
// console.log(age);
// console.log(occupation);