export function ex3_1(){

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
}

export function ex3_2() {

  console.log('EX 3.2. Template Strings - String Substitution');
  console.log('======================');

  let items = [];

  items.push("banana");
  items.push("tomato");
  items.push("light saber");

  var total = 100.5;

  console.log(`You have ${items.length} item(s) in your basket for a total of $${total}`);
}



