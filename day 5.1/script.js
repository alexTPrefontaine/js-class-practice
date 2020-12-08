console.log("JS file working fine");




const students = ["John", "Jane", "Tom"];

//Method 1 - regular loops
console.log("================== Method 1");
for (let i = 0; i < students.length; i++) {
    console.log("******************************************");
    console.log(`Welcome ${students[i]}`)
    console.log("******************************************");

}

// Method 2 - Passing a function
console.log("================== Method 2");

function myPrinter(student) {
    console.log("******************************************");
    console.log(`Welcome ${student}`)
    console.log("******************************************");
}

students.forEach(myPrinter);


// Method 3 - Annonymous functions
console.log("================== Method 3");

students.forEach(function (student) {
    console.log("******************************************");
    console.log(`Welcome ${student}`)
    console.log("******************************************");
});

// Print the sqaure of all the number in array using map
const bar = [4, 9, 2, 5, 8, 4];

// Method 1 
const resp = bar.map(function (num) {
    return num * num;
})

console.log(resp);

// Method 2 
// using arrow operator
const resp = bar.map(num => num * num);

// Method 3 
// is the same thing as
const resp = bar.map(num => { return num * num });

console.log(resp);