const person={
    name : "himanshu pandey",
    age : 20,
};
const employee = Object.create(person);
employee.company = "skilllab";
employee.position = "developer";
employee.salary = 50000;

console.log(employee.name); 
console.log(employee.age); 
console.log(employee.company); 
console.log(employee.position);
console.log(employee.salary); 
