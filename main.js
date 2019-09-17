console.log("What's the weather like today?");


const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}


let input = e.target.getElementById("input-temp")
let snowflake = `<i class="far fa-snowflake"></i>`
let thermometer =`<i class="fas fa-thermometer-half"></i>`
let sunShine = `<i class="fas fa-sun"></i>`
let smiley = `<i class="far fa-smile"></i>`
let domString = `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"><i class="fas fa-thermometer-half"></i></h5>
  <p class="card-text">${'test'}</p>
</div>
</div>`

printToDom(domString, "output");

//  (122 degrees Fahrenheit - 32) ÷ 1.8 = 50 degrees Celsius

const toCelsius =  (determineConverter) => {
     let celcius = ((input - 32) /1.8);  // input minus 32 then divided by 1.8
    console.log(celsius);
}

// (50 degrees Celsius x 1.8) + 32 = 122 degrees Fahrenheit

const toFahrenheit =  (determineConverter) => {
    let fahrenheit = ((input * 1.8) +32)  //input times 1.8 then + 32
    console.log(fahrenheit);
}

// // Get a reference to the button element in the DOM
const button = document.getElementById("converter");

// // This function should determine which conversion should
// // happen based on which radio button is selected.
const determineConverter = (e) => {
    const value = e.target.getElementById("input-temp");

    
    if (value) 
   console.log("event", e);
}

// // Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);