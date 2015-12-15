import nn from 'util/nn.init';

export class SimpleVehicle {

  constructor(make, year){
    this.make = make;
    this.year = year;
  }

  getMake(){
    console.log(this.make);
  }

  getYear() {
    console.log(this.year);
  };
}

export class ComplexVehicle extends SimpleVehicle {
  constructor(make, year, mileage) {
    super(make, year);
    this.mileage = mileage;
  }

  getMileage() {
    console.log(this.mileage);
  }

  setMileage(milleage) {
    this.mileage = milleage;
  }

  setMake(make) {
    this.make = make;
  }

  setYear(year) {
    this.year = year;
  }
}

nn.SliderClass = class {

  constructor(el, options){
    this.$el = el;
    ({CLASSES:this.CLASSES, SELECTORS: this.SELECTORS} = options)
  }

  returnData(){
    console.log('Current element is ' + this.$el);

    for(let index in this.CLASSES) {
      if (this.CLASSES.hasOwnProperty(index)) {
        console.log(this.CLASSES[index]);
      }
    }

    for(let index in this.SELECTORS) {
      if (this.SELECTORS.hasOwnProperty(index)) {
        console.log(this.SELECTORS[index]);
      }
    }
  }
};

export {nn};
