let employee = {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Software Engineer',
    salary: 80000
};

//Update the position of the employee object.
employee.position = 'Senior Software Engineer';
console.log(employee);

//Add a new property hireDate to the employee object.
employee.hireDate = '2020-01-01';
console.log(employee);

//Delete the salary property from the employee object.
let employee1 = {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Software Engineer',
    salary: 80000
};
delete employee1.salary;
console.log(employee1);

//Loop through the properties of the employee object and log each key-value pair to the console.
let employee2 = {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Software Engineer',
    salary: 80000
};
for (let i in employee2) {
    console.log(`${i}: ${employee2[i]}`);
}