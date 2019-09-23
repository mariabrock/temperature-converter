console.log("What's the weather like today?");


const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const snowflake = `<i class="far fa-snowflake"></i>`
const thermometer =`<i class="fas fa-thermometer-half"></i>`
const sunShine = `<i class="fas fa-sun"></i>`
const smiley = `<i class="far fa-smile"></i>`
let domString = `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"><i class="fas fa-thermometer-half"></i></h5>
  <p class="card-text">${"test"}</p>
</div>
</div>`
const cRadio = document.getElementById("inlineRadio2");
const fRadio = document.getElementById("inlineRadio1");

// Get a reference to the button element in the DOM
const input = document.getElementById("input-temp");
const clearButton = document.getElementById("clear");
const convertButton = document.getElementById("convert");

printToDom(domString, "output");

const toCelsius =  () => {
    const input = document.getElementById("input-temp");
    const celsius = ((input - 32) /1.8);  // input minus 32 then divided by 1.8
    console.log(celsius);
    //printToDom(domString, "output");
}


const toFahrenheit = () => {
    const input = document.getElementById("input-temp");1
    let fahrenheit = ((input * 1.8) +32)  //input times 1.8 then + 32
    console.log(fahrenheit);
    //printToDom(domString, "output");

}

// // This function should determine which conversion should
// // happen based on which radio button is selected.
const determineConverter = (e) => {
    const value = e.target.getElementById("input-temp");
    if (fRadio.checked === true) {
        toFahrenheit();
    } else if (cRadio.checked === true) {
        toCelsius();
    }
    //printToDOM (value, "output")
}
// Assign a function to be executed when the button is clicked
const init = (e) => {
    cRadio.checked = false;
    fRadio.checked = false;
    temperatureInput.value = '';
    tempResult.innerHTML = '';
    convertButton.addEventListener("click", determineConverter);
    clearButton.addEventListener("click", determineConverter); 
}


