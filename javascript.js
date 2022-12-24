
let calculator_container = document.getElementById("calculator_body");



//row zero
//ROW-ONE-START--------------------------------------------------
const row_one = ['1', '2', '3', '+'];
for (let i = 0; i<row_one.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_one[i]);
button.innerHTML = row_one[i];
button.style.gridRow = 2;
button.style.gridColumn = i+1;
calculator_container.appendChild(button);
console.log(i);
}

//ROW-TWO-START--------------------------------------------------
const row_two = ['4', '5', '6', '-'];
for (let i = 0; i<row_two.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_two[i]);
button.innerHTML = row_two[i];
button.style.gridRow = 3;
button.style.gridColumn = i+1;
calculator_container.appendChild(button);
}

//ROW-THREE-START--------------------------------------------------
const row_three = ['7', '8', '9', 'x'];
for (let i = 0; i<row_three.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_three[i]);
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
button.innerHTML = row_four[i];
button.style.gridRow = 5;
button.style.gridColumn = i+1;
calculator_container.appendChild(button);
}

//ROW-FIVE-START--------------------------------------------------
const row_five = ['remainder', '%', 'sqrt(x)', 'x^y'];
for (let i = 0; i<row_five.length; i++){
let button = document.createElement('BUTTON');
button.setAttribute('id', row_five[i]);
button.innerHTML = row_five[i];
button.style.gridRow = 6;
button.style.gridColumn = i+1;
calculator_container.appendChild(button);
}