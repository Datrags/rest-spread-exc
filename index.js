//Old Version
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

//ES2015 Version 
const filterOutOddsES15 = (...args) => args.filter(val => val % 2 == 0)

const findMin = (...args) => {
    let m = args[0]
    args.forEach(val => {
        if (val < m) {
            m = val;
        }
    })
    return m;
}

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2}
} 

const doubleAndReturnArgs = (arr, ...args) => {
    args.forEach(val => {
        arr.push(val * 2);
    })

    return arr;
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let x = [...items]
    x.splice(Math.random() * x.length, 1)
    return x;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    
    return {...obj, key: val}
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let x = {...obj}
    delete x[key];
    return x;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let x = {...obj};
    x[key] = val;
    return x;

}

//console.log(findMin(1,3,4,5,-3));
//console.log(mergeObjects({a:1,b:2},{c:4,d:5}))
//console.log(doubleAndReturnArgs([1,2,3],4,4));
ar = [1,2,3,4,5]
console.log(removeRandom(ar))
