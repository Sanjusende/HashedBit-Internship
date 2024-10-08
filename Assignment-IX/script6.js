//   Q:6.........................................................................................................................

const person = {
    name: 'Sanjay',
    age: 21,
    occupation: 'Developer'
  };
  
  function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}. I am ${obj.age} years old and work as a ${obj.occupation}.`);
  }
  
  greetPerson(person);
