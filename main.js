console.log(arrowTitle)
    /* START CODE UNDER THIS LINE */

/*--------------------Pulse Check--------------------*/
//______________________________________________________
//Q1
const colors = ['black', 'blue', 'red'];
const negativeNumbers = [-1, -99, -3, -44, -57];
const food = ['shawerma', 'mansaf', 'steack'];
const numbers = [

        [1, 3, 5],
        [2, 4, 6],
    ]
    //______________________________________________________
    //Q2
const orderedPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
orderedPlanets[3];

const unorderedPlanets = ["Mars", "Earth", "Mercury", "Jupiter", "Venus"];
unorderedPlanets[0];

const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];
animals[animals.length - 1]
    //______________________________________________________
    //Q3
    // a- use the `length` property
const orderedPlanets1 = ["Mercury", "Venus", "Earth", "Jupiter"];
orderedPlanets1[orderedPlanets1.length - 1] = ["Mars"];
// b- don't use the `length` property (use the index)
const unorderedPlanets1 = ["Mars", "Earth", "Mercury"];
unorderedPlanets1[2] = ["Mars"];
unorderedPlanets1[0] = ["Mercury"];

const animals1 = ["Cat", "Dog", "Dolphin", "Squirrel"];
animals1[0] = ["Koala"];

//______________________________________________________
//Q4
const reptiles = ["Snake", "Lizard", "Turtle"];
reptiles.push("Dinosaur");

const fish = ["Swordfish", "Clownfish", "Shark"];
fish.unshift("Goldfish");

reptiles.shift();
fish.pop();
//______________________________________________________
//Q5
random1 = [1, 9, 9, 3];
random1.join("");

random2 = ["John", "Doe", "The Third"];
random2.join(" ");

random3 = ["hello", "world"];
random3.join(',');

random4 = [1, 2, 3, 4];
random4.join("-");







/*--------------------Practice--------------------*/
//______________________________________________________
//Q1
const addToArray = function(array, string) {
    array.push(string)

    return array;

};

addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
addToArray(["Hello", "John", "i", "am"], "Jane"); // => ["Hello", "John", "i", "am", "Jane"]
//______________________________________________________
//Q2
const convertToString = function(array) {
    let x = array.join(" ");

    return x;

};

convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"
convertToString(["Hello", "John", "i", "am", "Jane"]); // => "Hello John i am Jane"
//______________________________________________________
//Q3
const accessElement = function(array, index) {

    return array[index];
};

accessElement([1, 2, 3, 4, 5], 0); // => 1
accessElement([1, 2, 3, 4, 5], 3); // => 4
accessElement([1, 2, 3, 4, 5], 10); // => "No element at index 10"
//______________________________________________________
//Q4
const isInArray = function(array, string) {
    if (array.indexOf(string) !== -1) {
        return "true";
    } else {
        return "false"
    }
}

isInArray(["John", "Jane", "Mark"], "Jane"); // => true
isInArray(["John", "Jane", "Mark"], "Mark"); // => true
isInArray(["John", "Jane", "Mark"], "Smith"); // => false
isInArray(["John", "Jane", "Mark"], "Doe"); // => false
//______________________________________________________
//Q5
const reverseWords = function(string) {
    return string.split(' ').reverse().join(' ');
};

reverseWords("Hello"); // => "Hello"
reverseWords("Hello World"); // => "World Hello"
//______________________________________________________
//Q6
const addToLast = function(array, value) {
    array.reverse();
    array.unshift(value);
    array.reverse()
    return array;
};

addToLast([1, 2, 3], 4); // => [1, 2, 3, 4]
addToLast([10, 6], 1); // => [10, 6, 1]
//______________________________________________________
//Q7
const getLength = function(array) {
    var length = [0];
    while (array[length] !== undefined) {
        length++;
    }
    return length;

};

getLength([1, 2, 3, 4]); // => 4
getLength([10, 22, 30]); // => 3

// write a function `getFirstVal` that accepts an array and returns the
// first value of the array without using the index to access the value
const getFirstVal = function(array) {
    const [firstValue] = array;
    return firstValue;

};

getFirstVal([1, 2, 3, 4]); // => 1
getFirstVal([51, 3, 3, 4]); // => 51
//______________________________________________________
//Q8
// the array values are unique, no duplicate values in the array
const updateOrCreate = function(array, value, index) {
    if (index) {
        array[index] = value;
        return array;

    };
};
updateOrCreate([10, 20, 30], 50, 1); // => [10, 50, 30]
updateOrCreate([10, 20, 30], 40, 3); // => [10, 20, 30, 40]
updateOrCreate([10, 20, 30], 100, 10); // => [10, 20, 30, empty * 7, 100]
//______________________________________________________
//Q9
const sliceArray = function(array, startVal, endVal) {
    let Start = array.indexOf(startVal);
    let End = array.indexOf(endVal - 1) - 1;

    return array.slice(Start, End);
};
sliceArray([10, 20, 30, 40, 50, 60], 20, 40); // => [10, 20, 30, 40, 50, 60]
sliceArray([10, 20, 30, 40, 50, 60], 20, 40); // => [20, 30, 40]
sliceArray([10, 20, 30, 40, 50, 60], 20, 20); // => []
sliceArray([10, 20, 30, 40, 50, 60], 50, 20); // => []
//______________________________________________________
//Q10
const randomFruit = function(array) {
    // array[Math.floor(Math.random() * fruits.length)];
    // return array;
    return array[Math.floor(Math.random() * array.length)];
    return fruits;
};
const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
randomFruit(fruits); // =>"Apple"
randomFruit(fruits); // =>"Apple"
randomFruit(fruits); // =>"Strawberry"
randomFruit(fruits); // =>"Banana"






/*--------------------Extra Practice--------------------*/
//______________________________________________________
//Q1
// a palindrome is when a string is read the same backwards
const isPalindrome = function(string) {
    let arrayValues = string.split('');
    let reverseArrayValues = arrayValues.reverse();
    let reverseString = reverseArrayValues.join('');
    if (string == reverseString) {
        return 'ture';
    } else {
        return 'false';
    }
};

isPalindrome("dad"); // => true
isPalindrome("was it a car or a cat i saw"); // => true
isPalindrome("a santa at nasa"); // => true
isPalindrome("John doe"); // => false
//______________________________________________________
//Q2
const arrayMiddle = function(array) {
        let x = array
        if (x % 2 != 0) {
            let mid = 0 + x / 2;
            return "The Middle Element is : " + array[mid];

        }
        arrayMiddle([1, 2, 3, 4, 5]); // => 3
        arrayMiddle([1, 2, 3, 4, 5, 6]); // => 3.5
        arrayMiddle([10, 52, 2, 10, 31]); // => 2
        arrayMiddle([10, 52, 2, 10, 31, 7]); // => 6
        //______________________________________________________
        //Q3
        const removeElement = function(array, index) {
            index = array.indexOf(index);
            if (index > -1) {
                array.splice(index, 1)
                return array;

            }
        };

        removeElement([1, 2, 3], 1); // => [1, 3]
        removeElement(["Hello", "John", "how", "are", "you"], 0); // => ["John", "how", "are", "you"]