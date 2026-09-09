const checknumber = (num) => {
    return num%2==0?"even":"odd";
}

const nums = [55 , 2 , 4 , 65 ]
for(let i = 0;i<nums.length;i++){
    console.log(checknumber(nums[i]))
}