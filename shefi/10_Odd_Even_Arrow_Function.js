// Question 10: Write an arrow function that checks if a number is even or odd.
// It should return "Even" if the number is even and "Odd" if the number is odd.

// Write Arrow Function code here
checkEvenOdd = (num) => {
  if (num % 2 == 0) return "Even";
  else return "Odd";
};

console.log(checkEvenOdd(4));
// Expected Output: Even
console.log(checkEvenOdd(7));
// Expected Output: Odd
