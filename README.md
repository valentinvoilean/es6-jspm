EX 5. Destructuring
===================

Destructuring is the process of breaking down a data structure into smaller parts.

Arrays
------
```javascript
var [a, b] = [1, 2];
console.log(a, b);
//=> 1 2
```

__Use from functions, only select from pattern__

```javascript
var foo = () => {
  return [1, 2, 3];
};

var [a, b] = foo();
console.log(a, b);
// => 1 2
```


__Ommit surten values__
```javascript
var [a, , b] = [1, 2, 3];
console.log(a, b);
// => 1 3
```


__Combine with rest (accumulates the rest values)__
```javascript
var [a, ...b] = [1, 2, 3];
console.log(a, b);
// => 1 [ 2, 3 ]
```

__Fail-safe.__
```javascript
var [, , , a, b] = [1, 2, 3];
console.log(a, b);
// => undefined undefined
```

__Swap variables easily without temp__
```javascript
var a = 1, b = 2;
[b, a] = [a, b];
console.log(a, b);
// => 2 1
```

__Advance deep arrays__
```javascript
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6
```

Objects
-------

```javascript
var {user: x} = {user: 5};
console.log(x);
// => 5
```


__Fail-safe__
```javascript
var {user: x} = {user2: 5};
console.log(x);
// => undefined
```

__More values__
```javascript
var {prop: x, prop2: y} = {prop: 5, prop2: 10};
console.log(x, y);
// => 5 10
```

__Short-hand syntax__
```javascript
var { prop, prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5 10
```

__Equal to:__
```javascript
var { prop: prop, prop2: prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5 10
```
__Deep objects__
```javascript
var {
  prop: x,
  prop2: {
    prop2: {
      nested: [ , , b]
    }
  }
} = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}};
console.log(x, b);
// => Hello c
```
