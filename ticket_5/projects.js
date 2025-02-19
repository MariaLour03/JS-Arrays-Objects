let projects = [
    { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
    { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
    { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
];

//Create a new array that contains only the names of the projects.
let projectNames = projects.map(project => project.projectName);
console.log(projectNames);

//Filter the array to only include projects that are 'in progress'.
let projects1 = [
    { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
    { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
    { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
];

let inProgressProjects = projects1.filter(project => project.status === 'in progress');
for (let project of inProgressProjects) {
    console.log(project.projectName, project.status);
}

//Sort the projects by their deadline in ascending order
let projects2 = [
    { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
    { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
    { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
];

projects2.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
for (let project of projects2) {
    console.log(project.projectName, project.deadline);
}



