// Question 5: Write a function that calculates the sum of all numbers in an array.

function calculateSum(numbers) {
    let sum=0;
   for(let i=0;i<numbers.length;i++)
   {
        sum += numbers[i];
   }
   return sum;
  }
  
  console.log(calculateSum([1, 2, 3, 4, 5])); 
  // Expected Output: 15
