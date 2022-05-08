function createPhoneNumber(numbers) {
    if (typeof numbers === "undefined") return;
    if (numbers.length == 0) return "Empty array";
    if (numbers.length < 10) return "Insufficient numbers in the array";
    let array = numbers.slice(0);

    if (numbers.length === 10) {
        for (number of numbers) {
            if (number < 0 || number > 9) {
                return "Array with elements out of range";
            }
        }
        array.splice(0, 0, "(");
        array.splice(4, 0, ")");
        array.splice(5, 0, " ");
        array.splice(9, 0, "-");
    }
    return array.join("");
};
//Segundo ejercicio
function sumaElementos(array) {
    if (typeof array === "undefined") return;
    if (!Array.isArray(array)) return "Wrong type of argument";
    return array.reduce((suma, elem) => suma + elem);
}

// Tercer ejercicio
function objectsCompare(obj1, obj2) {
    if (typeof obj1 === "undefined" || typeof obj2 === "undefined") return;
    const Obj1_keys = Object.keys(obj1);
    const Obj2_keys = Object.keys(obj2);
    if (Obj1_keys.length !== Obj2_keys.length) {
        return false;
    }
    for (let k of Obj1_keys) {
        if (obj1[k] !== obj2[k]) {
            return false;
        }
    }
    return true;
}

module.exports = {createPhoneNumber, sumaElementos, objectsCompare}
