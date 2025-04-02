function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        callback(value);
    }
    return collection;
}
function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const newArray = [];
    for (let value of values) {
        newArray.push(callback(value));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? [...collection] : Object.values(collection); // Copy array to avoid modifying original

    if (acc === undefined) {
        acc = values[0]; // Set first element as accumulator
        values = values.slice(1); // Copy remaining elements
    }

    for (let value of values) {
        acc = callback(acc, value, collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        if (predicate(value)) return value;
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let value of values) {
        if (predicate(value)) result.push(value);
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
    return n ? array.slice(0, n) : array[0];
}

function myLast(array, n) {
    return n ? array.slice(-n) : array[array.length - 1];
}

function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
        let valA = callback(a);
        let valB = callback(b);
        return valA > valB ? 1 : valA < valB ? -1 : 0;
    });
}

function myFlatten(array, shallow, newArr = []) {
    for (let item of array) {
        if (Array.isArray(item) && !shallow) {
            myFlatten(item, shallow, newArr);
        } else if (Array.isArray(item) && shallow) {
            newArr.push(...item);
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

console.log(myEach([1, 2, 3], console.log));
console.log(myMap([1, 2, 3], (num) => num * 3));
console.log(myReduce([1, 2, 3], (acc, val) => acc + val, 10)); 
console.log(myFind([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0)); 
console.log(myFilter([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0));
console.log(mySize({ one: 1, two: 2, three: 3 }));
console.log(myFirst([5, 4, 3, 2, 1]));
console.log(myLast([5, 4, 3, 2, 1], 3));
console.log(mySortBy([1, 2, 3, 4, 5, 6], (num) => Math.sin(num)));
console.log(myFlatten([1, [2], [3, [[4]]]]));
console.log(myKeys({ one: 1, two: 2, three: 3 }));
console.log(myValues({ one: 1, two: 2, three: 3 }));