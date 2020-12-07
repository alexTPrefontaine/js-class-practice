let studentId = "dsfsda"; // global scope

function print() {
    var name = "John";
    var age = 18;
    let height = "5ft";
    console.log(height);

    if (age == 18) {
        var occupation = "student"; // function scope
        let gender = "male"; // block scope
        console.log(name);
        console.log(occupation);
        console.log(gender);
        console.log(height);
    }


    // for () {
    // another example of block of code
    // }
    console.log(occupation);
    // console.log(gender); not accessible

}

print();


// var - global scope or function scope
// let - block scope