EX 7. Modules
=============

In ES6 each module is defined in its own file. The functions or variables defined in a module are not visible outside 
unless you explicitly export them. 

Exporting
---------

```javascript
// export data
export var color = "red";
export let name = "Nicholas";
export const magicNumber = 7;

// export function
export function sum(num1, num2) {
    return num1 + num1;
}

// export class
export class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

// this function is private to the module
function subtract(num1, num2) {
    return num1 - num2;
}

// define a function
function multiply(num1, num2) {
    return num1 * num2;
}

// export later
export multiply;
```

Importing
---------

You can import and use identifiers from that module in a number of ways. You can just import one identifier:

```javascript
// import just one
import { sum } from "example";

console.log(sum(1, 2));     // 3
```

If you want to import multiple identifiers from the example module, you can explicitly list them out:
```javascript
// import multiple
import { sum, multiply, magicNumber } from "example";
console.log(sum(1, magicNumber));   // 8
console.log(multiply(1, 2));        // 2
```

There’s also a special case that allows you to import the entire module as a single object. All of the exports are 
then available on that object as properties. For example:
```javascript
// import everything
import * as example from "example";
console.log(example.sum(1,
        example.magicNumber));          // 8
console.log(example.multiply(1, 2));    // 2
```

If the module importing the function wants to use a different name, it can also use as:

```javascript
import { add as sum } from "example";
console.log(typeof add);            // "undefined"
console.log(sum(1, 2));             // 3
```

Exporting and Importing Defaults
--------------------------------

The module syntax is really optimized for exporting and importing default values from modules. The default value for 
a module is a single variable, function, or class as specified by the default keyword. For example:

```javascript
export default function(num1, num2) {
    return num1 + num2;
}
```

or

```javascript
// equivalent to previous example
function sum(num1, num2) {
    return num1 + num2;
}

export { sum as default };
```

> **Note:** You can only have one default export per module. It is a syntax error to use the default keyword with 
multiple exports.

You can import a default value from a module using the following syntax:

```javascript
// import the default
import sum from "example";

console.log(sum(1, 2));     // 3
```
