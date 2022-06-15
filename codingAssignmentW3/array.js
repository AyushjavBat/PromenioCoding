// Coding Steps:

//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [];
ages.push(3, 9, 23, 64, 2, 8, 28, 93);


/** 
    a.  Programmatically subtract the value of the first element in the array from the value in the
        last element of the array(do not use numbers to reference the last element, find it
        programmatically, ages[7]– ages[0] is not allowed).Print the result to the console. */

function subFirstLastElement(arr) {
    return arr.shift() - arr.pop();
}
console.log(subFirstLastElement(ages));


/** 
    b.  Add a new age to your array and repeat the step above to ensure it is dynamic(works
        for arrays of different lengths).*/

ages.push(5);


/** 
    c.  Use a loop to iterate through the array and calculate the average age.Print the result to the 
        console.*/

function aveAges(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(aveAges(ages));


/** 
2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, 
‘Buck’, ‘Bob’.*/

let names = [];
names.push('Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob');


/**
    a.  Use a loop to iterate through the array and calculate the average number of letters per 
    name.Print the result to the console.*/

function aveLettersName(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length;
    }
    return sum / arr.length;
}
console.log(aveLettersName(names));

/** 
    b.  Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, 
        and print the result to the console.*/

function concatNames(arr) {
    let con = arr.shift();
    for (let i = 1; i < arr.length; i++) {
        con = con.concat(" ", arr[i]);
    }
    return con;
}
console.log(concatNames(names));


/** 
3. How do you access the last element of any array ?*/

let num = [1, 2, 3, 6];
let str = ['Tim', 'Tom', 'Day']

function accessLastElement(arr) {
    return arr.pop();
}

console.log(accessLastElement(num));
console.log(accessLastElement(str));


/**
4. How do you access the first element of any array ?*/

function accessFirstElement(arr) {
    return arr.shift();
}
console.log(accessLastElement(num));
console.log(accessLastElement(str));


/**
5. Create a new array called nameLengths.Write a loop to iterate over the previously created names array and
    add the length of each name to the nameLengths array.
    For example :
    namesArray = ["Kelly", "Sam", "Kate"] //given this array
    nameLengths = [5, 3, 4] //create this new array */

let namesArray = ["Richard", "Sammy", "Katerina", "Gandi"];

function addNewIndexArr(arr) {
    let newArrIndex = [];
    for (let i = 0; i < arr.length; i++) {
        newArrIndex.push(arr[i].length);
    }
    return newArrIndex;
}

let nameLengths = [];
nameLengths = (addNewIndexArr(namesArray));
console.log(nameLengths);


/**
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements
    in the array.Print the result to the console. */

function sumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfElements(nameLengths));


/** 
7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated
    to itself n number of times.(i.e.if I pass in ‘Hello’ and 3, I would expect the
    function to return‘ HelloHelloHello’).*/

function multiStr(word, n) {
    let newWords = '';
    for (let i = 0; i < n; i++) {
        newWords += word;
    }
    return newWords;
}
console.log(multiStr('Hello', 3));


/** 
8. Write a function that takes two parameters, firstName and lastName, and returns a full name
    (the full name should be the first and the last name separated by a space).*/

function fullName(firstName, lastName) {

    return firstName + " " + lastName;
}
console.log(fullName("Tom", "Ryan"));


/**
9. Write a function that takes an array of numbers and returns true
    if the sum of all the numbers in the array is greater than 100.*/

function sumOfArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum > 100)
        return true;
}
let array = [1, 23, 59, 90];
console.log(sumOfArr(array));


/** 
10. Write a function that takes an array of numbers and returns the
    average of all the elements in the array.*/

function aveOfNum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}


/** 
11. Write a function that takes two arrays of numbers and returns true
    if the average of the elements in the first array is greater than the 
    average of the elements in the second array.*/

function twoArrComp(arr1, arr2) {
    function aveOfNum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }
    if (aveOfNum(arr1) > aveOfNum(arr2))
        return true;

}
let num2 = [1, 2, 3, 4];
let num1 = [5, 6, 7, 8];
console.log(twoArrComp(num1, num2))


/** 
12. Write a function called willBuyDrink that takes a boolean isHotOutside,
    and a number moneyInPocket, and returns true
    if it is hot outside and
    if moneyInPocket is greater than 10.50.*/

function willBuyDrink(isHotOutside, moneyInPocket) {

    if (isHotOutside === "hot" && moneyInPocket > 10.50) {
        return true;
    }
}
console.log(willBuyDrink('hot', 15))

/**
13. Create a function of your own that solves a problem.In comments, write what the
    function does and why you created it.
    This is my own code. This is a function of counting how many same numbers are in two arrays. 
    I was interested.*/

function testSameElementsArrays(arr1, arr2) {
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result++;
            }
        }
    }
    return result;
}
console.log(testSameElementsArrays([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(testSameElementsArrays([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(testSameElementsArrays([1, 2, 3, 4], [11, 22, 33, 44]));