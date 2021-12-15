let output = document.querySelector('.output') as HTMLInputElement;
/*declare the following variables and types
  num1 as number
  num2 as number
  operand as string
  
  Figure out how to set the values of num1 and num2 as the buttons are clicked
  */

let num1:number = 0 ;
let num2:number = 0 ;
let operator:string = '';
let arr:Array<number>= [];
let count = 0; 

document.querySelector('.calc').addEventListener('click', (evt) => {
    let button = evt.target as HTMLButtonElement;

    if (button.className.indexOf('num') !== -1) {
        if (count === 0 ){
        num1= parseInt(button.innerHTML);
        arr.push(num1);
        output.value += button.innerHTML;
        }
        else{
            num2= parseInt(button.innerHTML);
            arr.push(num2);
            output.value += button.innerHTML;

        }
    }

    if (button.className.indexOf('operator') !== -1) {
        operator = button.innerHTML;
        num1 = parseInt(arr.join(''));
        arr = [];
        count ++;
        output.value += button.innerHTML;
        
    }

    if (button.className.indexOf('equal') !== -1) {
        num2 = parseInt(arr.join(''));
        console.log('number 1:'+num1,'number 2:'+num2);
        let calculation = calculate(num1, num2, operator);
        output.value= calculation.toString();
        

    }   
    

    /* create another condition to clear the value of the input when C is pressed*/
    if (button.className.indexOf('reset') !== -1) {
        console.log('I am clear')
        num1 = 0;
        num2 = 0;
        arr = []
        output.value = '';
    }

});

//create a function that takes in 2 numbers and a string (operand)
function calculate(num1:Number, num2:Number, operator:string):number {
   let total:number;
   console.log(num1,num2,operator)

    /* based on the operand, find the correct value of the 2 numbers.  i.e., 4+5=9, 4*5=20, etc
    return that value
    */

   switch(operator){
       case '+':
           total = +num1 + +num2;
           return total;
    
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


