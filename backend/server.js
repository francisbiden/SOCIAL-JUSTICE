const express = require('express')
const db = require('./database')
const bodyParser = require('body-parser')
const cors = require ('cors')

const app = express()

const port = 3500

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.use(cors())

//performing CRUD operations
//CREATE
app.get('/submit-plan',(req,res) => {
    const sql = `
CREATE TABLE plans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  payment_plan ENUM('basic', 'premium', 'ultimate') NOT NULL,
  course VARCHAR(50) NOT NULL
);`
 db.query(sql,(err) => {
     if(err){
         console.log('Error creating plans table:',err)
         return response.status(500).send('Error creating plans table')
     }
 })
 res.send('plans table created successfully')
 })

 //update/inserting values
 app.get('/submit-plans',(req,res) => {
    const sql = `
INSERT INTO plans (name, phone, payment_plan, course)
VALUES 
('John Doe', '1234567890', 'basic', 'Data scientist'),
('Jane Smith', '0987654321', 'premium', 'UI/UX Designer'),
('Alice Johnson', '1122334455', 'ultimate', 'Cyber security'),
('Bob Williams', '2233445566', 'basic', 'Fullstack Developer'),
('Charlie Brown', '3344556677', 'premium', 'Cloud Practitioner');
`
 db.query(sql,(err) => {
     if(err){
         console.log('Error updating plans table:',err)
         return response.status(500).send('Error inserting plans records')
     }
 })
 res.send('plans table updated successfully')
 })

//reading data from the table
app.get('/data',(req,res) => {
    db.query("SELECT * FROM plans", (err,results) => {
        if(err){
            console.error(err)
            res.status(500).send('Error retrieving data')
        }else {
            // Display the records to the browser
            res.render('data', {results:results})
        }
    })
})

app.get('/',(req,res)=>{
    res.status(200).send('Hello, you are now using the express package')

})

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`)
})