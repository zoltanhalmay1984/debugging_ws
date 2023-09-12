const data = [
    [17, 42, 55, 30, 88],
    [12, 5, 67, 42, 91],
    [54, 0, 73, 16, 3],
    [68, 10, 46, 0, 20],
    [38, 0, 0, 19, 77],
    [25, 50, 7, 32, 61],
    [84, 49, 9, 74, 28],
    [36, 70, 64, 13, 33],
    [76, 52, 27, 63, 99],
    [14, 59, 23, 71, 0],
];

function collectArraysWithZeros(data) {
    const filteredNumbers = [];
    for (const numbers of data) {
        for (const number of numbers) {
            if (number === 0) {
                filteredNumbers.push(numbers);
            }
        }
    }
    return filteredNumbers;
}

const filteredData = collectArraysWithZeros(data);
/* the filteredData result consists 5 arrays but one is duplicated on it
your task is to find the bug in the code using debugger and repair the code
expected output: [
  [ 54, 0, 73, 16, 3 ],
  [ 68, 10, 46, 0, 20 ],
  [ 38, 0, 0, 19, 77 ],
  [ 14, 59, 23, 71, 0 ]
] */

console.log(filteredData);
