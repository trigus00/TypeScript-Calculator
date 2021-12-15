var output = document.querySelector('.output');
/*declare the following variables and types
  num1 as number
  num2 as number
  operand as string
  
  Figure out how to set the values of num1 and num2 as the buttons are clicked
  */
var num1 = 0;
var num2 = 0;
var operand = '';
var arr = [];
document.querySelector('.calc').addEventListener('click', function (evt) {
    var button = evt.target;
    if (button.className.indexOf('num') !== -1) {
        arr.push(button.innerHTML);
        // console.log(arr)
        output.value = button.innerHTML;
    }
    if (button.className.indexOf('operator') !== -1) {
        num1 = parseInt(arr.join(''));
        arr = [];
        // console.log(button.innerHTML);
        output.value = '';
    }
    if (button.className.indexOf('equal') !== -1) {
        num2 = parseInt(arr.join(''));
        operand = button.innerHTML;
        // console.log(operand);
        var calculation = calculate(num1, num2, operand);
        output.innerHTML = calculation.toString();
    }
    /* create another condition to clear the value of the input when C is pressed*/
    if (button.className.indexOf('reset') !== -1) {
        console.log('I am clear');
        num1 = 0;
        num2 = 0;
        arr = [];
        output.value = '';
    }
});
//create a function that takes in 2 numbers and a string (operand)
function calculate(num1, num2, operand) {
    var total;
    /* based on the operand, find the correct value of the 2 numbers.  i.e., 4+5=9, 4*5=20, etc
    return that value
    */
    switch (operand) {
        case '+':
            //    total = +num1 + +num2;
            return +num1 + +num2;
        case '-':
            total = +num1 - +num2;
            return total;
        case '*':
            total = +num1 * +num2;
            return total;
        case '/':
            total = +num1 / +num2;
            return total;
    }
    return total;
}
