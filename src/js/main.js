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

  for (let i=0; i < 10; i++) {
    funcs.push(function() { console.log(i); });
  }

  funcs.forEach(function(func) {
    func();
  });

}());*/


/**
 * EX 3. Template Strings
 */

//EX 3.1. Template Strings
//Update the following code using back-ticks
(function(){

  console.log('EX 3.1. Template Strings - back-ticks');
  console.log('=====================================');

  var myTooLongString = "A long time ago, in a galaxy far," +
    "far away...." +
    "It is a period of civil war." +
    "Rebel spaceships, striking" +
    "from a hidden base, have won" +
    "their first victory against" +
    "the evil Galactic Empire.";

  console.log(myTooLongString);
}());


//EX 3.2. Template Strings
//Update the following code using String Substitution
(function(){

  console.log('EX 3.2. Template Strings - String Substitution');
  console.log('======================');

  var items = [];

  items.push("banana");
  items.push("tomato");
  items.push("light saber");

  var total = 100.5;
  console.log('You have ' + items.length + ' item(s) in your basket for a total of $'+ total);
}());
