function calcSum() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value, 
    num1 = parseInt(num1);

    
    num2 = document.getElementById('n2').value, 
    num2 = parseInt(num2)
    
    result = num1 + num2;
    
    document.getElementById('result').innerHTML = result;
}

function calcMinus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value, 
    num1 = parseInt(num1);

    
    num2 = document.getElementById('n2').value, 
    num2 = parseInt(num2)
    
    result = num1 - num2;
    
    document.getElementById('result').innerHTML = result;
}

function calcMultiply() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value, 
    num1 = parseInt(num1);

    
    num2 = document.getElementById('n2').value, 
    num2 = parseInt(num2)
    
    result = num1 * num2;
    
    document.getElementById('result').innerHTML = result;
}

function calcSplit() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value, 
    num1 = parseInt(num1);

    
    num2 = document.getElementById('n2').value, 
    num2 = parseInt(num2)
    
    result = num1 / num2;
    
    document.getElementById('result').innerHTML = result;
}