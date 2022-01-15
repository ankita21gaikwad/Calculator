import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

function main(): void {
   const firstString: string = question('Enter first number:\n');
   const operator: string = question('Enter operator:\n');
   const secondString: string = question('Enter second number:\n');

   const validInput: boolean = isNumber(firstString) && isOperator(operator) && isNumber(secondString);

   if(validInput){
      const firstNumber: number = parseInt(firstString);
      const secondNumber: number = parseInt(secondString);
      const result = calculate(firstNumber, operator as Operator, secondNumber);

      console.log(result);
   } else {
      console.log('\nInvalid Input\n');
      main();
   }
}

// CalculateFunction
function calculate(firstNumber: number, operator: Operator, secondNumber: number){
   switch(operator){
      case '+':
         return firstNumber + secondNumber;
      case '-':
         return firstNumber - secondNumber;
      case '*':
         return firstNumber * secondNumber;
      case '/':
         return firstNumber / secondNumber;

   }
}

// Function to validate if it is an operator
function isOperator(operator: string): boolean{
   switch(operator){
      case '+':
      case '-':
      case '*':
      case '/':
         return true;
      default:
         return false;
   }

}

// Function to validate if it is a number
function isNumber(str: string): boolean{
   const num = parseInt(str);
   const isNumber: boolean = !isNaN(num);
   return isNumber;
}

main();