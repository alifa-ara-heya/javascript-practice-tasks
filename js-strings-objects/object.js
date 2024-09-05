/* object = {
    property: "value",
    property1: "value2",
} */

// string, boolean are primitive/ primary/ basic data type which cannot be divided into more small parts. However, objects are non-primitive. Array is also a type of object.

// although the sequence in array matters because of the indices, the sequence doesn't matter in object
const bottle = {
    brand: "apple",
    price: 45,
    color: "white",
    isClean: false,
    liquids: ["water", "cola", "soda", "sparkling water"],
    moreSpecs: {
        isOpen: true,
        number: 12
    }
}

// adding a property and a value to an object

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car.passenger = 5;
console.log(car); //{ make: 'Toyota', model: 'Corolla', year: 2020, passenger: 5 }
