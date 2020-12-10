const bar = {
    name: "John",
    age: 14,
    occupation: "student"
};

const umbrella1 = {
    color: "blue",
    availableColors: ["blue", "green"],
    open: function () {
        console.log("Opening the amazing umbrella");
    },
    handle: {
        color: "black",
        material: "plastic"
    }
};

const umbrella2 = {
    color: "red",
    availableColors: ["blue", "green"],
    open: function () {
        console.log("Opening the umbrella");
    },
    handle: {
        color: "black",
        material: "plastic"
    }
};

const umbrellas = [umbrella1, umbrella2];

// umbrella.open();

// Create objects in array directly
const foo2 = [
    {
        name: "Jane"
    },
    {
        name: "John"
    }
]