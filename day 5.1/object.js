const bar = {
    name: "John",
    age: 14,
    occupation: "student"
};

const umbrella = {
    color: "blue",
    availableColors: ["blue", "green"],
    open: function () {
        console.log("Opening the umbrella");
    },
    handle: {
        color: "black",
        material: "plastic"
    }
};

umbrella.open();