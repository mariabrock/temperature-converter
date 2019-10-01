console.log("What's the weather like today?");


const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const snowflake = `<i class="far fa-snowflake"></i>`
const thermometer =`<i class="fas fa-thermometer-half"></i>`
const sunShine = `<i class="fas fa-sun"></i>`
const smiley = `<i class="far fa-smile"></i>`

const cRadio = document.getElementById("celsius");
const fRadio = document.getElementById("fahrenheit");
cRadio.checked = true;
fRadio.checked = false;

// Get a reference to the button element in the DOM
const clearButton = document.getElementById("clear");
const convertButton = document.getElementById("convert");



const toCelsius =  (input) => {
    const celsius = ((input - 32) /1.8);  // input minus 32 then divided by 1.8
    colorChange(celsius, "C");
    return(celsius);
}


const toFahrenheit = (input) => {
    let fahrenheit = ((input * 1.8) +32)  //input times 1.8 then + 32
    colorChange(fahrenheit, "F");
    return(fahrenheit);
}

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = () => {
    const input = document.getElementById("input-temp").value;
    let value = 0
    if (fRadio.checked === true) {
        value = toFahrenheit(input);
    } else if (cRadio.checked === true) {
        value = toCelsius(input);
    }
    domBuilder(value);
}

const domBuilder = (temp) => {
    let domString = `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title" id="icon"><i class="fas fa-thermometer-half"></i></h5>
  <p class="card-text">${temp}</p>
</div>
</div>` 
printToDom(domString, "output");
} 

const colorChanger = (input, scale) => {
    let convertedNum = document.getElementById("output");
    if(convertedNum.innerHTML > 90 || convertedNum.innerHTML > 32) {
        convertedNum.classList.addClass("red");
    } else if (convertedNum.innerHTML < 32 || convertedNum.innerHTML < 0) {
        convertedNum.classList.addClass("blue");
    } else { convertedNum.classList.addClass("green");}
    // grab the id  of "icon" and change .innerHTML to new icon (using const)
};

const eraseText = () => {
    window.location.reload();
}

// Assign a function to be executed when the button is clicked
const init = () => {    
    convertButton.addEventListener("click", determineConverter);
    clearButton.addEventListener("click", eraseText);
    convertButton.addEventListener("click", colorChanger);
}

init();