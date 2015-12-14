EX 2. "let" & "const" declarations
==================================

"Let" Declarations
-------------------

The scope of a __var__ declared in a JS function is the whole body of that function.

__An example of a variable clash__

```javascript

var x = 999;

for(var i =0; i<10; i++){
    var x = i * 2;
    console.log(x);
}

console.log('this is the final value of x', x);

```

Running the above code produces the wrong results, it changes the outer x from 999 to 18 after the loop, 
as you can see from this output:


```shell
0
2
4
6
8
10
12
14
16
18
this is the final value of x 18
```

__Fix it with let__

The let declaration syntax is the same as the syntax for var. You can basically replace var with let to declare a 
variable, but limit the variable’s scope to only the current code block. Since let declarations are not hoisted to the 
top of the enclosing block, you may want to always place let declarations first in the block, so that they are 
available to the entire block. 

```javascript
var x = 999;

for(var i =0; i<10; i++){
    let x = i * 2;
    console.log(x);
}

console.log('this is the final value of x', x);
```

Simply introducing let in the inner scope leaves the outer x to be 999, this is the output:

```shell
0
2
4
6
8
10
12
14
16
18
this is the final value of x 999
```

Constant Declarations
---------------------
Variables declared using __const__ are considered constants, meaning their values cannot be changed once set. For 
this reason, every const variable must be initialized on declaration, as shown in this example:

```javascript
// Valid constant
const maxItems = 30;

// Syntax error: missing initialization
const name;
```

Attempting to assign a const to a previously defined constant will throw an error, in both strict and non-strict modes:
 
```javascript
const maxItems = 5;

maxItems = 6;      // throws error
```
