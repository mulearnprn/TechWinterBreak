function updateAge(person1) {
    const newPerson = { ...person1 };
    newPerson.age = 35;
    return newPerson;
  }
  
  const person1 = { name: "Alice", age: 30 };
  const updatedPerson = updateAge(person1);
  
  console.log(person1); 
  // Expected Output: { name: "Alice", age: 30 }
  
  console.log(updatedPerson); 
  // Expected Output: { name: "Alice", age: 35 }
  