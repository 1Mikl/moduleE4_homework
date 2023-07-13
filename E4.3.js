//Задание 1.
function printOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

const obj = {
    prop1: "Значение 1",
    prop2: "Значение 2"
};

printOwnProperties(obj);

//Задание 2.

function property(Name, obj) {
    return Name in obj;
}


const person = {
    name: "John",
    age: 30
};

console.log(property("name", person));
console.log(property("address", person));


// Задание 3.
function NoProto() {
    const empty = Object.create(null);
    console.log(empty.constructor);
    console.log(empty.getPrototypeOf);
    return empty
}
NoProto()