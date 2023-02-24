/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

export const countNumberOfElements = (arr) => {
    return arr.reduce((acc) => {
        return acc + 1;
    }, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named eyeColorTally that, given the Star Wars data, uses reduce to return an 
object with a key for each eye color and whose value is the number of characters having that 
eye color:

{ blue: 1, yellow: 2, red: 1, brown: 1 }
------------------------------------------------------------------------------------------------ */

export const eyeColorTally = (arr) => {
    return arr.reduce((acc, next) => {
        if(acc[next.eye_color]) {
            acc[next.eye_color]++;
        } else {
            acc[next.eye_color] = 1;
        }
        return acc;
    }, {});
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named eyeColorNames that, given the Star Wars data, uses reduce to return an 
object with a key for each eye color and whose value an array of character names having that 
eye color:

{ blue: 1, yellow: 2, red: 1, brown: 1 }
------------------------------------------------------------------------------------------------ */

export const eyeColorNames = (arr) => {
    return arr.reduce((acc, { eye_color, name }) => {
        acc[eye_color] = [...(acc[eye_color] || []), name];
        return acc;
    }, {}); 
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named countNumberOfChildren that, given the array of characters, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */


export const countNumberOfChildren = (arr) => {
    return arr.reduce((acc, character) => {
        return acc + (character.children ? character.children.length : 0);
    }, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

export const calculateAverage = (arr) => {
    return arr.reduce((acc, num) => {
        return { count: acc.count + 1, sum: acc.sum + num };
    }, { count: 0, sum: 0 }).sum / arr.length;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

const isPrime = (value) => {
    if(value <= 1) {
        return false;
    }
    for(let i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
};

export const countPrimeNumbers = (arr) => {
    return arr.reduce((primeCount, curr) => {
        if(isPrime(curr)) {
            primeCount++;
        }
        return primeCount;
    }, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named effortStats that, given the snorlaxData uses reduce to return an object with the 
minimum and maximum effort level in the format:

Hint: The accumulator should begin as { min: 0, max: 0 }

------------------------------------------------------------------------------------------------ */

export const effortStats = (arr) => {
    return arr.reduce((acc, stat) => { 
        const effort = stat.effort;
        if(acc.min === 0 || effort < acc.min){ 
            acc.min = effort;
        } 
        if(acc.max === 0 || effort > acc.max){ 
            acc.max = effort;
        } 
        return acc;
    }, { min: 0, max: 0 });
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:

1) Uses filter to return an array of the characters that contain the letter 'a' in their name

2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */

export const extractChildren = (arr) => {
    return arr.filter(character => character.name.includes('a')).reduce((acc, character) => {
        character.children && acc.push(...character.children);
        return acc;
    }, []);
};
