/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */

export const count = (target, input) => {
    return input.reduce((total, currentArray) => {
        let sum = 0;
        currentArray.filter(num => {
            if(num === target) {
                sum++;
            }
        });
        return total + sum;
    }, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */

export const totalSum = (input) => {
    return input.flat().reduce((a, b) => a + b);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that are not numbers or are not divisible by five.

This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */

export const divisibleByFiveTwoToThePower = (input) => {
    let result = [];
    for(let i = 0; i < input.length; i++) {
        let subResult = [];
        for(let j = 0; j < input[i].length; j++) {
            if(typeof input[i][j] === 'number' && input[i][j] % 5 === 0) {
                subResult.push(Math.pow(2, input[i][j]));
            }
        }
        result.push(subResult);
    }
    return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named findTallerThan that, given the Star Wars data, below,
returns the names of the characters who are taller than the specified height

The names should be combined into a single string with each character name separated by "and".

For example, "Luke Skywalker and C-3PO".
------------------------------------------------------------------------------------------------ */

export const findTallerThan = (minHeight, data) => {
    let arr = [];
    data.forEach(character => {
        if(character.height > minHeight) {
            arr.push(character.name);
        }
    });
    return arr.join(' and ');
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named findShortestName that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.
------------------------------------------------------------------------------------------------ */

export const findShortestName = (data) => {
    const sorted = data.sort((a, b) => a.height - b.height);
    return sorted[0].name;
};
