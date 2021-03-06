const express = require('express');
const app = express();
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "employeeSystem"
})

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) {
            console.log("Error", err);
        } else {
            res.send(result);
        }
    })
})

app.post('/create', (req, res) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const password = req.body.password;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query(
        "INSERT INTO employees (name, lastname, password, age, country, position, wage) VALUES(?,?,?,?,?,?,?)",
        [name, lastname, password, age, country, position, wage],
        (err, result) => {
            if (err) {
                console.log("Error", err);
            } else {
                res.send("Values inserted");
            }
        }
    )
});

app.put("/updateWage", (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    db.query(
        "UPDATE employees SET wage = ? WHERE id = ?",
        [wage, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.put("/updatePassword", (req, res) => {
    const id = req.body.id;
    const password = req.body.password;
    db.query(
        "UPDATE employees SET password = ? WHERE id = ?",
        [password, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen('5000', () => {
    console.log('Server is running at port 5000');
})