function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}


const numbers = [5, 2, 8, 1, 9, 3];
const sortedNumbers = sortAscending(numbers);

console.log(sortedNumbers);
