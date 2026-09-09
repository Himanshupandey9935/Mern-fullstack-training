const student = {
    name: "himanshu pandey",
    age: 20,
    courses: ["Mathematics", "Physics", "Chemistry"],
    address: "varanasi",  
    };

const {name, age, courses: [a,b,c], address} = student;

console.log(name);
console.log(age);
console.log(a);
console.log(b);
console.log(c);
console.log(address);
