//Inheritance Assignment for 3 classes
class Vehicle {
    constructor(vehicleName, vehicleType) {
        this.Name = vehicleName;
        this.Type = vehicleType;

    }

    getVechileName() {
        return this.Name;
    }

    getVechileType() {
        return this.Type;
    }
}

class Car extends Vehicle {
    constructor(vehicleName, vehicleType) {
        super(vehicleName, vehicleType);

    }
}

class Bike extends Vehicle {
    constructor(vehicleName, vehicleType) {
        super(vehicleName, vehicleType);

    }
}

class Scooter extends Vehicle {
    constructor(vehicleName, vehicleType) {
        super(vehicleName, vehicleType);

    }
}

let objCar = new Car('Car', 'FourWheel');
console.log(`Vehicle Name is: ${objCar.getVechileName()} Type:- ${objCar.getVechileType()}`)

let objBike = new Bike('Bike', 'TwoWheel');
console.log(`Vehicle Name is: ${objBike.getVechileName()} Type:- ${objBike.getVechileType()}`)

let objScooter = new Scooter('Scooter', 'TwoWheel');
console.log(`Vehicle Name is: ${objScooter.getVechileName()}Type:- ${objScooter.getVechileType()}`)