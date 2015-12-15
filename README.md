EX 6. Classes
=============

In ECMAScript 5 and earlier, there were no classes, and the closest equivalent was creating a constructor and then 
assigning methods to its prototype. This approach is called creating a custom type. For example:

```javascript
function PersonType(name) {
    this.name = name;
}

PersonType.prototype.sayName = function() {  //  shared by all instances of PersonType
    console.log(this.name);
};

let person = new PersonType("Nicholas");
person.sayName();   // outputs "Nicholas"

console.log(person instanceof PersonType);  // true
console.log(person instanceof Object);      // true
```

Class Declarations
------------------
Here’s the class equivalent of the previous example:

```javascript
class PersonClass {

    // equivalent of the PersonType constructor
    constructor(name) {
        this.name = name;
    }

    // equivalent of PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
}

let person = new PersonClass("Nicholas");
person.sayName();   // outputs "Nicholas"

console.log(person instanceof PersonClass);     // true
console.log(person instanceof Object);          // true

console.log(typeof PersonClass);                    // "function"
console.log(typeof PersonClass.prototype.sayName);  // "function"
```

We can also rewrite it using __class expressions__

```javascript
// class expressions do not require identifiers after "class"
let PersonClass = class {

    // equivalent of the PersonType constructor
    constructor(name) {
        this.name = name;
    }

    // equivalent of PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
};

let person = new PersonClass("Nicholas");
person.sayName();   // outputs "Nicholas"

console.log(person instanceof PersonClass);     // true
console.log(person instanceof Object);          // true

console.log(typeof PersonClass);                    // "function"
console.log(typeof PersonClass.prototype.sayName);  // "function"
```

Another interesting use of class expressions is to create singletons by immediately invoking the class constructor. 
To do so, you must use new with a class expression and include parentheses at the end. For example:

```javascript
let person = new class {

    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }

}("Nicholas");
```

person.sayName();       // "Nicholas"

Derived Class
-------------
Another problem with custom types in ECMAScript 5 and earlier was the extensive process necessary to implement 
inheritance. To properly inherit, you would need multiple steps. For instance:
```javascript
function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width;
};

function Square(length) {
    Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        value:Square,
        enumerable: true,
        writable: true,
        configurable: true
    }
});

var square = new Square(3);

console.log(square.getArea());              // 9
console.log(square instanceof Square);      // true
console.log(square instanceof Rectangle);   // true
```

Derived classes use the extends keyword to specify the function from which the class should inherit. The prototypes are 
automatically adjusted and you can access the base class constructor using super(). Here’s the equivalent of the 
previous example:

```javascript
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

class Square extends Rectangle {
    constructor(length) {

        // same as Rectangle.call(this, length, length)
        super(length, length);
    }
}

var square = new Square(3);

console.log(square.getArea());              // 9
console.log(square instanceof Square);      // true
console.log(square instanceof Rectangle);   // true
```

Class Methods
-------------
The methods on derived classes always shadow methods of the same name on the base class. For instance, you can 
add getArea() to Square in order to redefine that functionality:

```javascript
class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }

    // override and shadow Rectangle.prototype.getArea()
    getArea() {
        return this.length * this.length;
    }
}
```
