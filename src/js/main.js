import options from 'util/nn.config';

import ex2 from 'ex/ex2';
import {ex3_1, ex3_2} from 'ex/ex3';
import * as ex4 from 'ex/ex4';
import * as ex5 from 'ex/ex5';
import * as ex6 from 'ex/ex6';

/**
 * EX 2. "let" & "const" declarations
 */

ex2();

/**
 * EX 3. Template Strings
 */

ex3_1();
ex3_2();
/**
 * EX 4. Functions
 */

ex4.part1();
ex4.part2();
ex4.part3();
ex4.part4();

/**
 * EX 5. Destructuring
 * Update the code below, so the variables CLASSES & SELECTORS to be defined by destructuring the "options" object
 */

var slider = new ex5.nn.Slider();
slider.init(document.body, options);

/**
 * EX 6. Classes
 */

// 6.1 Update the following code with ES6 Classes
console.log('EX 6.1 Update the following code with ES6 Classes');
console.log('=================================================');

var vehicle = new ex6.SimpleVehicle('Mercedes-Benz', 2015);
vehicle.getMake();
vehicle.getYear();

// 6.2 Create a new Class from "Vehicle" named "ComplexVehicle"
// add the 3rd parameter named "mileage"
// and add 4 more methods ( getMileage, setMileage, setMake & setYear )

console.log('6.2 Create a new Class from "Vehicle" named "ComplexVehicle"');
console.log('===========================================================');

var vehicle2 = new ex6.ComplexVehicle('BMW', 2012, 12000);
vehicle2.getMileage();
vehicle2.getMake();
vehicle2.getYear();

vehicle2.setMake('Audi');
vehicle2.setYear(2010);
vehicle2.setMileage(20000);

vehicle2.getMileage();
vehicle2.getMake();
vehicle2.getYear();

// 6.3 Update the EX5 with ES6 Classes.
// Use the "constructor" method instead of "init".

console.log('EX 6.3 Update the EX5 with ES6 Classes.');
console.log('=======================================');

let slider2 = new ex6.nn.SliderClass(document.body, options);
slider2.returnData();
