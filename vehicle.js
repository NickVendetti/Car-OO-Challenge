class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}
const vehicle = new Vehicle("ford", "focus", 2001);
const dreamVehicle = new Vehicle("porsche", "cayman", 2015);
// console.log(dreamVehicle.toString());

class Car extends Vehicle {
  numWheels = 4;
}
let myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle {
  numWheels = 2;

  revEngine() {
    return "VROOM!!!";
  }
}
const bike = new Motorcycle("honda", "CBR", 2003);
// console.log(bike, bike.revEngine());

class Garage {
  vehicles = [];
  constructor(maxCapacity) {
    this.capacity = maxCapacity;
  }
  add(vehicleToAdd) {
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }

    if (vehicleToAdd instanceof Vehicle) {
      this.vehicles.push(vehicleToAdd);
    } else {
      return "Only vehicles are allowed in here!";
    }
  }
}
const garage1 = new Garage(2);
garage1.add(new Vehicle("Toyota", "Corolla", 2005));
