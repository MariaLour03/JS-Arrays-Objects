let salaries = [35000, 45000, 55000, 70000, 90000];

// filter out the salaries that are less than 50000
console.log(salaries.filter(salary => salary < 50000));

// create a new array with the square of each salary
let salaries1 = [20000, 30000, 40000, 50000];
console.log(salaries1.map(salary => salary * salary));

// find the first salary that is greater than $60,000
let salaries2 = [45000, 55000, 70000, 90000];
console.log(salaries2.find(salary => salary > 60000));

//Calculate the total sum of all sales made
let sales = [100, 200, 150, 300, 400];
console.log(sales.reduce((acc, curr) => acc + curr, 0));

//Loop through the list of departments and log each one to the console.
let departments = ['HR', 'Finance', 'Engineering', 'Marketing'];
departments.forEach(department => console.log(department));