
// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
      // YOUR CODE STARTS HERE
      console.log("--- Processed Users ---");
      const result = users

      // 1. Filter even IDs
        .filter(users => users.id % 2 === 0)

      // 2. Map to clean objects {id, name, city}
        .map(users => {
            return {
                id: users.id,
                name: users.name,
                city: users.address.city,
            }
        });
        
      // 3. Add Guest User at the start using Spread (...)
        const u = {
            id: 0,
            name: "Guest User",
            city: "Castelldefels",
        };
        const result2 = [u, ...result];
      
      console.log(result2);
      
      console.log("--- Statistics ---");
      // 4. Reduce to count total characters in names
      const result3 = users.reduce((total, users) => total + users.name.length, 0);
      const result4 = result2.reduce((total, result2) => total + result2.name.length, 0);
      
      console.log("Full list count: ", result3);
      console.log("Modified list count: ", result4);
    });

// EJEMPLO
// const combined = ages 
//   .map(age => age *2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0);