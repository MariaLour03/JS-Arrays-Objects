//Create a new array that contains the first three items from the original inventory list.
let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
let newInventory = inventory.slice(0, 3);
console.log(newInventory);

//Remove two items starting from index 2 in the inventory.
let inventory1 = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
inventory1.splice(2, 2);
console.log(inventory1);

//Add new equipment to the inventory starting at index 3.
let inventory2 = ['Laptop', 'Phone', 'Keyboard', 'Monitor'];
inventory2.splice(3, 0, 'Printer');
console.log(inventory2);

//Merge two arrays of office equipment into one.
let officeEquipment1 = ['Printer', 'Scanner', 'Desk'];
let officeEquipment2 = ['Chair', 'Lamp', 'Notebook'];
let allEquipment = officeEquipment1.concat(officeEquipment2);
console.log(allEquipment);

//Sort the list of sales amounts in descending order.
let sales = [500, 1000, 750, 2000, 1250];
sales.sort((a, b) => b - a);
console.log(sales);

