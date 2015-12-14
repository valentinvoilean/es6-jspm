EX 4. Functions
===============

Simulating Default Parameters in ECMAScript 5
---------------------------------------------

In ECMAScript 5 and earlier, you would likely use the following pattern to create a function with default parameters:

```javascript
function makeRequest(url, timeout, callback) {

    timeout = timeout || 2000;
    callback = callback || function() {};

    // the rest of the function

}
```

ECMAScript 6 makes it easier to provide default values for parameters by providing initializations that are used when the parameter isn’t formally passed. For example:

```javascript
function makeRequest(url, timeout = 2000, callback = function() {}) {

    // the rest of the function

}
```

Default Parameter Expressions
-----------------------------
Perhaps the most interesting feature of default parameter values is that the default value need not be a primitive value. 
You can, for example, execute a function to retrieve the default parameter, like this:

```javascript
function getValue() {
    return 5;
}

function add(first, second = getValue()) {
    return first + second;
}

console.log(add(1, 1));     // 2
console.log(add(1));        // 6
```

Rest Parameters
---------------
A rest parameter is indicated by three dots (...) preceding a named parameter. That named parameter becomes an Array 
containing the rest of the parameters passed to the function, which is where the name “rest” parameters originates.

In the next example, we use the rest parameters to collect arguments from the second one to the end. We then multiply 
them by the first one:

```javascript
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3); 
console.log(arr); // [2, 4, 6]
```

The Spread Operator
-------------------
Closely related to rest parameters is the spread operator. While rest parameters allow you to specify that multiple 
independent arguments should be combined into an array, the spread operator allows you to specify an array that should 
be split and have its items passed in as separate arguments to a function. 

__Example:__ Today if you have an array and want to create a new array with the existing one being part of it, the array 
literal syntax is no longer sufficient and you have to fall back to imperative code, using a combination of push, 
splice, concat, etc. With spread syntax this becomes much more succinct:

```javascript
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]
````

__Example__: it is common to use Function.prototype.apply in cases where you want to use an array as arguments 
to a function.

```javascript
let values = [25, 50, 75, 100]

console.log(Math.max.apply(Math, values));  // 100
```

With ES6 spread you can now write the above as:

```javascript
let values = [25, 50, 75, 100]

// equivalent to
// console.log(Math.max(25, 50, 75, 100));
console.log(Math.max(...values, 125));           // 125
```

Arrow Functions
---------------
An arrow function expression (also known as fat arrow function) has a shorter syntax compared to function expressions 
and lexically binds the this value (does not bind its own this, arguments, super, or new.target). 
Arrow functions are always anonymous.

The following arrow function takes a single argument and simply returns it:

```javascript
var reflect = value => value;

// effectively equivalent to:

var reflect = function(value) {
    return value;
};
```

If you are passing in more than one argument, then you must include parentheses around those arguments, like this:

```javascript
var sum = (num1, num2) => num1 + num2;

// effectively equivalent to:

var sum = function(num1, num2) {
    return num1 + num2;
};
```

If there are no arguments to the function, then you must include an empty set of parentheses in the declaration, as follows:

```javascript
var getName = () => "Nicholas";

// effectively equivalent to:

var getName = function() {
    return "Nicholas";
};
```
