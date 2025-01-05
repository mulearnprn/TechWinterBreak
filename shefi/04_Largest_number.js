// Question 4: Write a function that finds and returns the largest number in an array.

function findLargestNumber(numbers) {
    var max = 0;
   for (let index = 0; index < numbers.length; index++) {
   if(numbers[index] > max)
    max = numbers[index];
   }
   console.log(max);
  }
  
  console.log(findLargestNumber([10, 20, 5, 8])); 
  // Expected Output: 20