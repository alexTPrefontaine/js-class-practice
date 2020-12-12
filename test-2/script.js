const foods = [];

// Function to add a food item to the list
function addFood() {
    const foodNameEl = document.getElementById("foodName");
    const caloriesEl = document.getElementById("calories");

    foods.push({
        name: foodNameEl.value, calories: caloriesEl.value
    });

    foods.sort((firstEl, secEl) => { return firstEl.calories - secEl.calories });

    foodNameEl.value = "";
    caloriesEl.value = "";

    displayFoods();
}

// Display all food items in list
function displayFoods() {
    const foodListEl = document.getElementById("food-list");
    foodListEl.textContent = "";
    foods.forEach(food => {
        let newListItem = document.createElement("li");
        newListItem.textContent = `${food.name} - ${food.calories}`;
        foodListEl.appendChild(newListItem);
    });
}