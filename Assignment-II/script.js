
// Assignment-II ....................................................
// Q.1  .......  .

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  };

// output-2,4,6.......................100


  // Q.2  .......  .
//  
function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "cannot divide by zero!";
            break;
        default:
            result = 'Invalid operator';
    }
    return result;
}
console.log(calculate(10, 5, '+')); // Output: 15
console.log(calculate(10, 5, '-')); // Output: 5
console.log(calculate(10, 5, '*')); // Output: 50
console.log(calculate(10, 5, '/')); // Output: 2
console.log(calculate(10, 0, '/')); // Output: cannot divide by zero!

// Q.3...........................
function findTax(salary) {
    let tax = 0;
  
    switch (true) {
      case (salary > 0 && salary <= 500000):
        tax = 0; // 0% tax
        break;
      case (salary > 500000 && salary <= 1000000):
        tax = salary * 0.10; // 10% tax
        break;
      case (salary > 1000000 && salary <= 1500000):
        tax = salary * 0.20; // 20% tax
        break;
      case (salary > 1500000):
        tax = salary * 0.30; // 30% tax
        break;
      default:
        tax = 'Invalid salary input'; 
    }
  
    return tax;
  }

//   console.log(findTax(400000)); // Output: 0
//   console.log(findTax(750000)); // Output: 75000 
//   console.log(findTax(1200000)); // Output: 240000 
//   console.log(findTax(2000000)); // Output: 600000 
  


//   Q.4.............................
function sumOfProducts(n1, n2) {
    let sum = 0;
  
    
    let num1Str = n1.toString();
    let num2Str = n2.toString();
  
    
    let len1 = num1Str.length;
    let len2 = num2Str.length;
  
  
    let i = len1 - 1;
    let j = len2 - 1;
  
    
    while (i >= 0 || j >= 0) {
      
      let digit1 = i >= 0 ? parseInt(num1Str[i]) : 0;
      let digit2 = j >= 0 ? parseInt(num2Str[j]) : 0;
  
      
      sum += digit1 * digit2;
  
      
      i--;
      j--;
    }
  
    return sum;
  }
   
  console.log(sumOfProducts(6, 34));  // Output: 24 (6*4 + 0*3)
  console.log(sumOfProducts(123, 456));  // Output: 32 (3*6 + 2*5 + 1*4)
  console.log(sumOfProducts(89, 123));   // Output: 29 (9*3 + 8*2 + 0*1)
  