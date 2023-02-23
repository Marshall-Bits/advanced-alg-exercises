/*
.map() Challenge:
Create a function that takes an array of objects with name and age properties, and returns an array of objects with name and yearOfBirth properties, where yearOfBirth is calculated based on the current year minus the age.
*/

//Example Input:
const peopleArray = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 40 }
]

function getYearOfBirth(arr) {
    // your code here
}

console.log(getYearOfBirth(peopleArray))

//Expected Output:
/*
[
  { name: 'Alice', yearOfBirth: 1993 },
  { name: 'Bob', yearOfBirth: 1998 },
  { name: 'Charlie', yearOfBirth: 1983 }
]
*/

/*
.reduce() Challenge:
Create a function that takes an array of numbers and returns an object with two properties: sum and product. sum should be the sum of all the numbers, and product should be the product of all the numbers.
*/

const numbers = [1, 2, 3, 4, 5]

function sumAndProduct(arr) {
    // your code here
}

console.log(sumAndProduct(numbers))
// Expected Output: { sum: 15, product: 120 }

/*
.sort() Challenge:
Create a function that takes an array of objects with name and age properties, and returns the same array sorted by name in ascending order.If two objects have the same name, then they should be sorted by age in descending order.
Use the peopleArray from the previous challenge.
*/

function sortByName(arr) {
    // your code here
}

console.log(sortByName(peopleArray))
// Expected Output:
/*
[
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 40 }
]
*/

/*
    .reverse() Challenge:
Create a function that takes an array of arrays, where each inner array represents a row in a table, and returns a new array of arrays where the rows are in reverse order.
*/
const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function reverseTable(arr) {
    // your code here
}

console.log(reverseTable(table))

/*
Expected Output:
[
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3]
]
*/