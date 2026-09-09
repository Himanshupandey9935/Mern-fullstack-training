const digitSum = (num) => {
    let sum = 0;
 while (num > 0) {
    let rem = num % 10;
    sum += rem;
    num = Math.floor(num / 10);
 }
 
 return sum;
}
console.log(digitSum(123)); 