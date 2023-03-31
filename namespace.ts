namespace Vehicle {
  export class Car {
    constructor(public car: string, public model: string) {}
    public start() {
      console.log(`${this.car} ${this.model}`);
    }
  }
  
  export class Truck extends Car {
    public loadCargo() {
      console.log(`New model is ${this.car} ${this.model}...`);
    }
  }
}


const car = new Vehicle.Car("Honda", "Civic");
car.start(); 

const truck = new Vehicle.Truck("Ford", "F-150");
truck.start(); 
truck.loadCargo(); 