const fs = require('fs')

fs.writeFile('employees.json', { "name": "Employee 1 name", "salary": 2000 }, (err) => {
  if (err) console.log(err)
  console.log("Successfully Written to File.")
})

