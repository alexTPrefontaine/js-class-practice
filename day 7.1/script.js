console.log("JS file working fine");

function addName() {
    const textEl = document.getElementById("text-box");
    const textValue = textEl.value;
    const namesEl = document.getElementById("names");

    namesEl.innerHTML += `${textValue} <br>`
    textEl.value = "";
}