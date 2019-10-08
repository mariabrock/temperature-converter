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

const colorChanger = (input, scale) => {
    domBuilder(input);
    let convertedNum = document.getElementById("temp");

    // if(input > 90 + "F" || input > 32 + "F") {
    
    if((input > 90 && scale === "F") || (input > 32 && scale === "C")){ 
        convertedNum.classList.add("red");
        convertedNum.classList.remove("blue");
        convertedNum.classList.remove("green");
        document.getElementById("icon").innerHTML = sunShine;
    }
     else if ((input < 32 && scale === "F") || (input < 0 && scale === "C")) {
        convertedNum.classList.add("blue");
        convertedNum.classList.remove("red");
        convertedNum.classList.remove("green");
        document.getElementById("icon").innerHTML = snowflake;
    } else {convertedNum.classList.add("green");
        convertedNum.classList.remove("red");
        convertedNum.classList.remove("blue");
        document.getElementById("icon").innerHTML = smiley;}
    // grab the id  of "icon" and change .innerHTML to new icon (using const)
    // console.log (colorChanger);
};

const toCelsius =  (input) => {
    const celsius = ((input - 32) /1.8);  // input minus 32 then divided by 1.8
    colorChanger(celsius, "C");
    return(celsius);
};


const toFahrenheit = (input) => {
    let fahrenheit = ((input * 1.8) +32)  //input times 1.8 then + 32
    colorChanger(fahrenheit, "F");
    return(fahrenheit);
};

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = () => {
    const input = document.getElementById("input-temp").value;
    let scale = "";
    let value = 0
    if (fRadio.checked === true) {
        scale = "F";
        value = toFahrenheit(input);
    } else if (cRadio.checked === true) {
        scale = "C";
        value = toCelsius(input);
    }
    domBuilder(value);
    colorChanger(value, scale);
};

const domBuilder = (temp) => {
    let domString = `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title" id="icon"><i class="fas fa-thermometer-half"></i></h5>
  <p class="card-text" id="temp">${temp}</p>
</div>
</div>` 
printToDom(domString, "output");
}; 



const eraseText = () => {
    window.location.reload();
}

// Assign a function to be executed when the button is clicked
const init = () => {    
    convertButton.addEventListener("click", determineConverter);
    clearButton.addEventListener("click", eraseText);
};

init();