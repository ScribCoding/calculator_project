

let calculator_container = document.getElementById("calculator_body");

let equation_display = document.getElementById("equation_display");
let current_equation = "";

//variables



//row zero
//ROW-ONE-START--------------------------------------------------
const row_one = ['1', '2', '3', '+'];
for (let i = 0; i<row_one.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_one[i]);
button.setAttribute('value', row_one[i]);
button.onclick=(use);
button.innerHTML = row_one[i];
button.style.gridRow = 2;
button.style.gridColumn = i+1;
calculator_container.appendChild(button);
}

//ROW-TWO-START--------------------------------------------------
const row_two = ['4', '5', '6', '-'];
for (let i = 0; i<row_two.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_two[i]);
button.setAttribute('value', row_two[i]);
button.onclick=(use);
button.innerHTML = row_two[i];
button.style.gridRow = 3;
button.style.gridColumn = i+1;
calculator_container.appendChild(button);
}

//ROW-THREE-START--------------------------------------------------
const row_three = ['7', '8', '9', '*'];
for (let i = 0; i<row_three.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_three[i]);
button.setAttribute('value', row_three[i]);
button.onclick=(use);
button.innerHTML = row_three[i];
button.style.gridRow = 4;
button.style.gridColumn = i+1;
calculator_container.appendChild(button);
}

//ROW-FOUR-START--------------------------------------------------
const row_four = ['0', '.', '=', '/'];
for (let i = 0; i<row_four.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_four[i]);
button.setAttribute('value', row_four[i]);
button.onclick=(use);
console.log(button.value);
button.innerHTML = row_four[i];
button.style.gridRow = 5;
button.style.gridColumn = i+1;
calculator_container.appendChild(button);
}

//ROW-FIVE-START--------------------------------------------------
const row_five = ['remainder', '%', '√', 'x^y'];
for (let i = 0; i<row_five.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_five[i]);
button.setAttribute('value', row_five[i]);
button.onclick=(use);
button.innerHTML = row_five[i];
button.style.gridRow = 6;
button.style.gridColumn = i+1;
calculator_container.appendChild(button);
}


function use(){
    try{
        let equation = 0;

        if(isNaN(this.value)){ //if the current value being clicked is an operator
         operator(this.value);   
        }
        else if(current_equation.includes("pow")){
         current_equation += `${this.value})`;
         equation_display.innerHTML += this.value;
         console.log(current_equation);
        }
        else{
            current_equation += (this.value);  
            console.log(current_equation);
            equation_display.innerHTML += this.id;  
        }
    }
    catch{
        equation_display.innerHTML = "ERROR";
        
    }
    };

operator = (operator) =>{
    if(operator == '='){ //if the current value being clicked is the '=' operator
        equation = (eval(current_equation)); //holds the result of calculating the string equation
        equation_display.innerHTML = String(equation); //sets display to calculated result
        current_equation = String(equation); //sets the current equation to calculated result
    }
    else if(operator=='√'){       
        equation = Math.sqrt(eval(current_equation));
        equation_display.innerHTML = String(equation);
        current_equation = String(equation);
    }
    else if(operator=='+'){      
        current_equation += operator;
        console.log("the current eq is: " + current_equation);
        equation_display.innerHTML += (operator);
    }
    else if(operator=='-'){      
        current_equation += operator;
        console.log("the current eq is: " + current_equation);
        equation_display.innerHTML += (operator);
    }
    else if(operator=='/'){      
        current_equation += operator;
        equation_display.innerHTML += (operator);
    }
    else if(operator=="remainder"){
        current_equation += '%';
        console.log("the current eq is: " + current_equation);
        equation_display.innerHTML += ("R");
    }
    else if(operator=="%"){
        current_equation += '/100';
        console.log("the current eq is: " + current_equation);
        equation_display.innerHTML += ("%");
    }
    else if(operator=="*"){
        current_equation += '*';
        console.log("the current eq is: " + current_equation);
        equation_display.innerHTML += ("x");
    }
    else if(operator=="x^y"){
        previous_number = current_equation;
        current_equation = `Math.pow(${previous_number},`;
        console.log("the current eq is: " + current_equation);
        equation_display.innerHTML += ("^");
    }
    else if(operator=="."){
        current_equation += '.';
        console.log("the current eq is: " + current_equation);
        equation_display.innerHTML += (".");
    }
}



