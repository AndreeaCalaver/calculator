const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];
let accumulativeCalculation


function calculate(button){
    const value = button.textContent;
    if(value === "CLEAR"){
        calculation = []
        screenDisplay.textContent = "."
    } else if(value === "="){
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else if( value === "√"){
        screenDisplay.textContent = Math.sqrt(eval(accumulativeCalculation) );
        accumulativeCalculation = screenDisplay.textContent;
        calculation = [];
        calculation.push(screenDisplay.textContent);
    }
    else {
        calculation.push(value);
        
        accumulativeCalculation = calculation.join("");

        screenDisplay.textContent = accumulativeCalculation;
    }
}
buttons.forEach(button => button.addEventListener("click", () => calculate(button) ));