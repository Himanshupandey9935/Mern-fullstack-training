const nums=[34,56,25,45,27,22,19,24];
const largest = nums.reduce((max, num) => {
    return Math.max(max, num);
}, 0);
console.log(largest);