EX 3. Getting Literal With ES6 Template Strings
===============================================

Syntax
------
Template Strings use back-ticks (``) rather than the single or double quotes we’re used to with regular strings. 
A template string could thus be written as follows:

```javascript
var greeting = `Yo World!`;
```

String Substitution
-------------------
One of their first real benefits is string substitution. Substitution allows us to take any valid JavaScript expression 
(including say, the addition of variables) and inside a Template Literal, the result will be output as part of the same 
string.

Template Strings can contain placeholders for string substitution using the ${ } syntax, as demonstrated below:

```javascript
// Simple string substitution
var name = "Brendan";
console.log(`Yo, ${name}!`);

// => "Yo, Brendan!"
```

As all string substitutions in Template Strings are JavaScript expressions, we can substitute a lot more than variable 
names. For example, below we can use expression interpolation to embed for some readable inline math:

```javascript
var a = 10;
var b = 10;
console.log(`JavaScript first appeared ${a+b} years ago. Crazy!`);

//=> JavaScript first appeared 20 years ago. Crazy!

console.log(`The number of JS MVC frameworks is ${2 * (a + b)} and not ${10 * (a + b)}.`);
//=> The number of JS frameworks is 20 and not 2000.
```

They are also very useful for functions inside expressions:

```javascript
function fn() { return "I am a result. Rarr"; }
console.log(`foo ${fn()} bar`);
//=> foo I am a result. Rarr bar.
```

Multiline Strings
-----------------
Any new line characters inserted in the source are part of the template string. Using normal strings, you would have to use the following syntax in order to get multi-line strings:

```javascript
console.log("string text line 1\n"+
"string text line 2");
// "string text line 1
// string text line 2"
```

To get the same effect with multi-line strings, you can now write:

```javascript
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

Tagged Templates
----------------
Tagged template strings

Example: If a template string is preceded by an expression it is considered a tagged template string.
The expression before the template string is called with the parsed template string.

```javascript
function buildURL(strArray, ...valArray) {
  var newUrl = strArray[0] + "ja-ja" + "/" + valArray[1] +
    "/" + valArray[2];

  return newUrl;
}

var lang = "en-us";
var a = "library";
var b = "dn771551.aspx";

// Call the tagged template function.
var url = buildURL`http://msdn.microsoft.com/${lang}/${a}/${b}`;

console.log(url);

// Output:
// http://msdn.microsoft.com/ja-ja/library/dn771551.aspx
```
