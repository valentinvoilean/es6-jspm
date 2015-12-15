// EX 4.1. Rest parameters
// Update the "pick" function using Rest parameters
export function part1(){
  console.log('EX 4.1. Rest parameters');
  console.log('=======================');

  function pick(object, ...keys) {
    let result = {};

    // start at the second parameter
    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = object[keys[i]];
    }

    return result;
  }

  let book = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    year: 2015
  };

  let bookData = pick(book, "author", "year");

  console.log(bookData.author);   // "Nicholas C. Zakas"
  console.log(bookData.year);     // 2015
}

// EX 4.2. The spread operator
// Update the "d" variable, using the spread operator;
export function part2() {
  console.log('EX 4.2. The spread operator');
  console.log('===========================');

  var a, b, c, d;

  a = [1,2,3];
  b = "dog";
  c = [42, "cat"];

  d = [...a,b,...c];

  console.log(d);
}

// EX 4.3. Default Parameter Expressions + Arrow functions
// Change the "inc" function to a fat arrow function; update it with default parameters
export function part3() {
  console.log('EX 4.3. Default Parameter Expressions + Arrow functions');
  console.log('=======================================================');

  let inc = (number, increment = 1) => number + increment;

  console.log(inc(2, 2));
  console.log(inc(2));
}

// EX 4.4. Arrow function
// Simplify the code with arrow functions
export function part4() {
  console.log('EX 4.4. Arrow function');
  console.log('======================');

  function Person() {
    this.age = 0;
    setInterval(() => this.age++, 100);
  }

  let getAge = person => console.log('The person is ' + person.age + ' years old!');

  let p = new Person();

  getAge(p);

  setTimeout(() => getAge(p),2000)
}
