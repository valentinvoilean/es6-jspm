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
/*(function () {

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
}());*/


//EX 3.2. Template Strings
//Update the following code using String Substitution
/*(function () {

  console.log('EX 3.2. Template Strings - String Substitution');
  console.log('======================');

  let items = [];

  items.push("banana");
  items.push("tomato");
  items.push("light saber");

  var total = 100.5;
  console.log(`You have ${items.length} item(s) in your basket for a total of $${total}`);
}());*/


/**
 * EX 4. Functions
 */

// EX 4.1. Rest parameters
// Update the "pick" function using Rest parameters
(function () {

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

  d = [...a,b,...c];

  console.log(d);
})();


// EX 4.3. Default Parameter Expressions + Arrow functions
// Change the "inc" function to a fat arrow function; update it with default parameters
(function () {

  console.log('EX 4.3. Default Parameter Expressions + Arrow functions');
  console.log('=======================================================');

  let inc = (number, increment = 1) => number + increment;

  console.log(inc(2, 2));
  console.log(inc(2));
}());


// EX 4.4. Arrow function
// Simplify the code with arrow functions
(function () {

  console.log('EX 4.4. Arrow function');
  console.log('======================');

  function Person() {
    this.age = 0;
    setInterval(() => this.age++, 100);
  }

  let getAge = person => console.log('The person is ' + person.age + ' years old!');

  let p = new Person();

  getAge(p);

  // setTimeout(() => getAge(p),2000)
})();


/**
 * EX 5. Destructuring
 * Update the code below, so the variables CLASSES & SELECTORS to be defined by destructuring the "options" object
 */

(function () {

  // let's assume this comes from nn.init
  let nn = {};

  // let's assume this comes from nn.config
  const options = {
    CLASSES: {
      isHidden: 'isHidden',
      isVisible: 'isVisible'
    },

    SELECTORS: {
      slick: 'slick'
    }
  };
  ////////////////////////////////////////

  nn.AddColors = (function(){

    let
      _$el,
      CLASSES,
      SELECTORS,

      _returnData = function() {

        console.log('Current element is ' + _$el);

        for(let index in CLASSES) {
          if (CLASSES.hasOwnProperty(index)) {
            console.log(CLASSES[index]);
          }
        }

        for(let index in SELECTORS) {
          if (SELECTORS.hasOwnProperty(index)) {
            console.log(SELECTORS[index]);
          }
        }

      };

    return {
      init: function (el, options) {
        _$el = el;
        CLASSES = options.CLASSES;
        SELECTORS = options.SELECTORS;

        _returnData();
      },

      destroy: function () {
        CLASSES = null;
        SELECTORS = null;
      }
    }
  });

  let addColors = new nn.AddColors();

  addColors.init(document.body, options);
})();
