"format es6";

/**
 * EX 2. "let" & "const" declarations
 */


// EX 2.1
// What is wrong with the following code ?
// Please try to fix it with & without the "let" keyword.

(function(){

  var funcs = [];

  for (var i=0; i < 10; i++) {
    funcs.push(function() { console.log(i); });
  }

  funcs.forEach(function(func) {
    func();
  });

}());
