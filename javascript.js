

let calculator_container = document.getElementById("calculator_body");
let equation_display = document.getElementById("equation_display");
let display_container = document.getElementById("display_container");
let body = document.getElementById("body");
let current_equation = "";
let equation = 0;
//variables

//EARS------------------------------------------------------------
let left_ear = document.createElement('img');
left_ear.setAttribute('src', "ear.png");
left_ear.setAttribute('id', "left_ear");
calculator_container.appendChild(left_ear);

let right_ear = document.createElement('img');
right_ear.setAttribute('src', "r-ear.png");
right_ear.setAttribute('id', "right_ear");
calculator_container.appendChild(right_ear);

//ROW-CLEAR-START--------------------------------------------------
const row_six = ['clear'];
const row_six_icons = ['calculator_icons/clear.png'];
let button = document.createElement('BUTTON');
button.setAttribute('id', "clear");
button.setAttribute('value', row_six[0]);
button.onclick=(use);
button.innerHTML = "clear";
display_container.appendChild(button);

//row zero
//ROW-ONE-START--------------------------------------------------
const row_one = ['1', '2', '3', '+'];
const row_one_icons=['calculator_icons/1.png','calculator_icons/2.png','calculator_icons/3.png','calculator_icons/add.png'];

for (let i = 0; i<row_one.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_one[i]);
button.setAttribute('value', row_one[i]);
button.onclick=(use);
button.style.gridRow = 2;
button.style.gridColumn = i+1;
button.style.backgroundImage = `url(${row_one_icons[i]})`;
button.style.backgroundSize = "70px";
button.style.backgroundRepeat = "no-repeat";
button.style.backgroundPosition = "center";
calculator_container.appendChild(button);
}

//ROW-TWO-START--------------------------------------------------
const row_two = ['4', '5', '6', '-'];
const row_two_icons=['calculator_icons/4.png','calculator_icons/5.png','calculator_icons/6.png','calculator_icons/minus.png'];
for (let i = 0; i<row_two.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_two[i]);
button.setAttribute('value', row_two[i]);
button.onclick=(use);
button.style.gridRow = 3;
button.style.gridColumn = i+1;
button.style.backgroundImage = `url(${row_two_icons[i]})`;
button.style.backgroundSize = "70px";
button.style.backgroundRepeat = "no-repeat";
button.style.backgroundPosition = "center";
calculator_container.appendChild(button);
}

//ROW-THREE-START--------------------------------------------------
const row_three = ['7', '8', '9', '*'];
const row_three_icons=['calculator_icons/7.png','calculator_icons/8.png','calculator_icons/9.png','calculator_icons/multiply.png'];
for (let i = 0; i<row_three.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_three[i]);
button.setAttribute('value', row_three[i]);
button.onclick=(use);
button.style.gridRow = 4;
button.style.gridColumn = i+1;
button.style.backgroundImage = `url(${row_three_icons[i]})`;
button.style.backgroundSize = "70px";
button.style.backgroundRepeat = "no-repeat";
button.style.backgroundPosition = "center";
calculator_container.appendChild(button);
calculator_container.appendChild(button);
}

//ROW-FOUR-START--------------------------------------------------
const row_four = ['0', '.', 'x^y', '/'];
const row_four_icons = ['calculator_icons/0.png','calculator_icons/decimal.png','calculator_icons/exponent.png','calculator_icons/divide.png'];
for (let i = 0; i<row_four.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_four[i]);
button.setAttribute('value', row_four[i]);
button.onclick=(use);
console.log(button.value);
button.style.gridRow = 5;
button.style.gridColumn = i+1;
button.style.backgroundImage = `url(${row_four_icons[i]})`;
button.style.backgroundSize = "70px";
button.style.backgroundRepeat = "no-repeat";
button.style.backgroundPosition = "center";
calculator_container.appendChild(button);
}

//ROW-FIVE-START--------------------------------------------------
const row_five = ['remainder', '%', '√', '='];
const row_five_icons = ['calculator_icons/remainder.png','calculator_icons/percent.png','calculator_icons/square_root.png','calculator_icons/equal.png'];
for (let i = 0; i<row_five.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_five[i]);
button.setAttribute('value', row_five[i]);
button.onclick=(use);
button.style.gridRow = 6;
button.style.gridColumn = i+1;
button.style.backgroundImage = `url(${row_five_icons[i]})`;
button.style.backgroundSize = "70px";
button.style.backgroundRepeat = "no-repeat";
button.style.backgroundPosition = "center";
calculator_container.appendChild(button);
}




function use(){
    try{
        if(equation_display.innerHTML == "ERROR"){
            if(this.value == "clear" || this.value == "=" || this.value == "remainder" || this.value == "x^y" || this.value == "√"){
                current_equation ='';
                console.log("the current eq is: " + current_equation);
                equation_display.innerHTML = ("");
            }else{
            equation_display.innerHTML = this.value;
            current_equation += this.value;
            }
        }
        else if(isNaN(this.value)){ //if the current value being clicked is an operator
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
        current_equation = "";
        console.log(current_equation);
        console.log(this.value);
    }
    };

operator = (operator) =>{
    if(operator == '='){ //if the current value being clicked is the '=' operator
        if(current_equation != ""){//to make sure it doesn't evaluate an empty string
        equation = (eval(current_equation)); //holds the result of calculating the string equation
        equation_display.innerHTML = String(equation); //sets display to calculated result
        current_equation = String(equation); //sets the current equation to calculated result
        }
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
    else if(operator=="clear"){
        current_equation ='';
        console.log("the current eq is: " + current_equation);
        equation_display.innerHTML = ("");
    }
    
}



