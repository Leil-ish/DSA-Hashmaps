const {HashMap} = require('./hashmap.js')

MAX_LOAD_RATIO = 0.5
SIZE_RATIO = 3

function main() {
    let lor = new HashMap()
    lor.set('Hobbit', 'Bilbo')
    lor.set('Hobbit', 'Frodo')
    lor.set('Wizard', 'Gandalf')
    lor.set('Human', 'Aragon')
    lor.set('Elf', 'Legolas')
    lor.set('Maiar', 'The Necromancer')
    lor.set('Maiar', 'Sauron')
    lor.set('RingBearer', 'Gollum')
    lor.set('LadyOfLight', 'Galadriel')
    lor.set('HalfElven', 'Arwen')
    lor.set('Ent', 'Treebeard')
    console.log(lor)
    console.log(lor.get('Maiar'))
    console.log(lor.get('Hobbit'))
}

//The duplicate keys -- Hobbit and Maiar -- only saved the second result (Frodo and Sauron, respectively), overwriting the first.
//Capacity is 24 now, since we hit .5 of our max load and tripled capacity 

const WhatDoesThisDo = function () {
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1, 10);
    map1.set(str2, 20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3, 20);
    map2.set(str4, 10);

    console.log('map1 =', map1.get(str1)); // returns 20
    console.log('map2 =', map2.get(str3)); // returns 10
}

//This function creates a collision, so the new values overwrite the old values.

//Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length m = 11 using open addressing and a hash function k mod m.
// [22, 88, null, null, 4, 15, 28, 17, 59, 31, 10]

// Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.
// [null, [28, 19, 10], 20, 12, null, 5, [15, 33], null, 17]

function removeDuplicates(str) {
    const map = new Map();
    let newStr = '';
    str.split('').forEach(letter => {
        if (!map.has(letter)) {
            map.set(letter, '');
            newStr += letter;
        }
    });
    return newStr;
}

console.log(removeDuplicates('google')); // gole
console.log(removeDuplicates('google all that you think can think of')); // gole athyuinkcf 

function palindromeCheck(string) {
    const result = new Map();
    for (let i = 0; i < string.length; i++) {
        console.log(result);
        if (!result.delete(string[i])) {
            result.set(string[i], 1);
        }
    }
    console.log(result.size, result);
    if (result.size <= 1) {
        return true;
    } return false;
}

console.log(palindromeCheck('acecarr'));
console.log(palindromeCheck('north'));

function anagram(arr) {
    const obj = {}

    function sortedWord(str) {
        return str.split("").sort().join(',')
    }

    for (let i = 0; i < arr.length; i++) {
        if (!obj[sortedWord(arr[i])]) {
            obj[sortedWord(arr[i])] = [arr[i]]
        } else {
            obj[sortedWord(arr[i])].push(arr[i])
        }
    }

    const solution = []

    Object.keys(obj).forEach(key => solution.push(obj[key]))
    return solution
}

anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'])


HashMap_SepChain.MAX_LOAD_RATIO = 0.5;
HashMap_SepChain.SIZE_RATIO = 3;

function sepMain() {
    const lor = new HashMap_SepChain;
    const data = [{ 'Hobbit': 'Bilbo' }, { 'Hobbit': 'Frodo' },
    { 'Wizard': 'Gandolf' }, { 'Human': 'Aragon' }, { 'Elf': 'Legolas' }, { 'Maiar': 'The Necromancer' },
    { 'Maiar': 'Sauron' }, { 'RingBearer': 'Gollum' }, { 'LadyOfLight': 'Galadriel' }, { 'HalfElven': 'Arwen' },
    { 'Ent': 'Treebeard' }];
    data.forEach(obj => {
        const key = Object.keys(obj)[0];
        lor.set(key, obj[key]);
    });
    console.log(lor);
}

sepMain();