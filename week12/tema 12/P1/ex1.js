// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

// var Vehicle = function (driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.drive = function (mph) {
//         this.speed = mph;
//         return this.driver + ' driving at ' + mph + ' miles per hour';
//     };
// };

// var Car = function (driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.drive = function (mph) {
//         this.speed = mph;
//         return this.driver + ' driving at ' + mph + ' miles per hour';
//     };
// };

// var Truck = function (driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.cargo = [];
//     this.drive = function (mph) {
//         this.speed = mph;
//         return this.driver + ' driving at ' + mph + ' miles per hour';
//     };

//     this.loadCargo = function (cargo) {
//         this.cargo.push(cargo);
//         return this;
//     };

//     this.unloadCargo = function () {
//         return this.cargo.pop();
//     };
// };


////////////////////////////////////////

class Vehicle {
    constructor(driver) {
        this.driver = driver;
        this.speed = 0;
        this.drive = function (mph) {
            this.speed = mph;
            return this.driver + ' driving at ' + mph + ' miles per hour';
        };
    };
}

class Car extends Vehicle {
    constructor(driver, speed, drive) {
        super(driver, speed, drive);
    }
}

class Truck extends Car {
    constructor(driver, speed, drive) {
        super(driver, speed, drive)
        this.cargo = [];
        this.loadCargo = function (cargo) {
            this.cargo.push(cargo);
            return this;
        };
        this.unloadCargo = function () {
            return this.cargo.pop();
        };


    }
}

var myCar = new Car("alex");
console.log(myCar.drive(89));
var myTruck= new Truck("mihai",29,"bla");

console.log(myTruck.loadCargo('bsk'));
console.log(myTruck.loadCargo(09));

console.log(myTruck.drive(90));
console.log(myTruck.speed);

console.log(myTruck.loadCargo("dljd"));
console.log(myTruck.loadCargo(900));
console.log(myTruck.unloadCargo());

console.log(myTruck.drive(46));
console.log(myTruck.driver);


