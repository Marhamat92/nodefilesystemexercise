const fs = require('fs')
const http = require('http')

fs.writeFile('employees.json', '[{ "name": "Employee 1 name", "salary": 2000 }]', 'utf8', (err) => {
  if (err) console.log(err)
  console.log("Successfully Written to File.")
})

fs.readFile('employees.json', 'utf8', (err, data) => {
  if (err) console.log(err)
  console.log(data)

})

//add new object into the array
fs.readFile('employees.json', 'utf8', (err, data) => {
  if (err) console.log(err)
  let employees = JSON.parse(data)
  employees.push({ name: "Employee 3 Name", salary: 6000 })
  console.log(employees)
  fs.writeFile('employees.json', JSON.stringify(employees), 'utf8', (err) => {
    if (err) console.log(err)
    console.log("Successfully added to File.")
  })
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    res.end()
  }
  ).listen(3000)
})