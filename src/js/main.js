"format es6";

/**
 * EX 2. "let" & "const" declarations
 */

// EX 2.1
// What is wrong with the following code ?
// Please try to fix it with & without the "let" keyword.

/*(function(){

  console.log('EX 2.1 - "let" keyword');
  console.log('======================');

  let funcs = [];

  //for (let i=0; i < 10; i++) {
  //  funcs.push((function() { return function() { console.log(i); } }()));
  //}

  for (let i = 0; i < 10; i++) {
    funcs.push(function () {
      console.log(i);
    });
  }

  funcs.forEach(function (func) {
    func();
  });

}());*/


/**
 * EX 3. Template Strings
 */

//EX 3.1. Template Strings
//Update the following code using back-ticks
(function () {

  console.log('EX 3.1. Template Strings - back-ticks');
  console.log('=====================================');

  let myTooLongString =
    `A long time ago, in a galaxy far,
    far away....
    It is a period of civil war.
    Rebel spaceships, striking
    from a hidden base, have won
    their first victory against
    the evil Galactic Empire.`;

  console.log(myTooLongString);
}());


//EX 3.2. Template Strings
//Update the following code using String Substitution
(function () {

  console.log('EX 3.2. Template Strings - String Substitution');
  console.log('======================');

  let items = [];

  items.push("banana");
  items.push("tomato");
  items.push("light saber");

  var total = 100.5;
  console.log(`You have ${items.length} item(s) in your basket for a total of $${total}`);
}());


/**
 * EX 4. Functions
 */

// EX 4.1. Rest parameters
// Update the "pick" function using Rest parameters
(function () {

  console.log('EX 4.1. Rest parameters');
  console.log('=======================');

  function pick(object) {
    let result = {};

    // start at the second parameter
    for (let i = 1, len = arguments.length; i < len; i++) {
      result[arguments[i]] = object[arguments[i]];
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
}());


// EX 4.2. The spread operator
// Update the "d" variable, using the spread operator;
(function() {

  console.log('EX 4.2. The spread operator');
  console.log('===========================');

  var a, b, c, d;

  a = [1,2,3];
  b = "dog";
  c = [42, "cat"];

  d = a.concat(b, c);

  console.log(d);
})();


// EX 4.3. Default Parameter Expressions + Arrow functions
// Change the "inc" function to a fat arrow function; update it with default parameters
(function () {

  console.log('EX 4.3. Default Parameter Expressions + Arrow functions');
  console.log('=======================================================');

  function inc(number, increment) {
    // set default to 1 if increment not passed
    // (or passed as undefined)
    increment = increment || 1;
    return number + increment;
  }

  console.log(inc(2, 2));
  console.log(inc(2));
}());


// EX 4.4. Arrow function
// Simplify the code with arrow functions
(function () {

  console.log('EX 4.4. Arrow function');
  console.log('======================');

  function Person() {
    var self = this; // Some choose `that` instead of `self`.
                     // Choose one and be consistent.
    self.age = 0;

    setInterval(function () {
      // The callback refers to the `self` variable of which
      // the value is the expected object.
      self.age++;
    }, 100);
  }

  var p = new Person();

  var getAge = function (person) {
    console.log('The person is ' + person.age + ' years old!');
  };

  getAge(p);

  setTimeout(function(){
    getAge(p);
  },2000)
})();
