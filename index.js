const fs = require('fs');
const updateJsonFile = require('update-json-file')
//Start from the begining and comment all except first one, 
//then after run you open the next function comment,
// follow this order for the rest of it.

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => { //CREATE
    if (err) console.log(err);
});

fs.readFile('employees.json', 'utf8', (err, data) => { //READ
    if (err) console.log(err);
    console.log(data);
})

fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 5000}', 'utf8', (err) => { //UPDATE,ADD
    if (err) console.log(err);
});


fs.readFile('employees.json', 'utf8', (err, data) => { // to see what updated //READ
    if (err) console.log(err);
    console.log(data);
})

fs.unlink('employees.json', (err) => { //DELETE
    if (err) console.log(err);
});