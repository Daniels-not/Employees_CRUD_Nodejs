const express = require('express');
const connectDB = require('../database/database');
const router = express.Router();
const app = express();


// get all employees from database and send it to the client

router.get('/', (req, res) => {
    connectDB.query('SELECT * FROM employee', (err, results) => {
        if (err) {
            console.log("Theres has been an error while loading the data from the data base 😵‍💫" + err);
        } else {
            res.render('index', {results:results})
        }
    });
});


// router for create new employee

router.get('/create', (req, res) => {
    res.render('create');
})


// router for create new employee

const create = require('../controller/crud');
router.post('/save', create.save);
router.post('/update', create.update);


// delete employee from database and send it to the client


router.get('/delete/:id', (req, res) => {
    connectDB.query('DELETE FROM employee WHERE id = ?', [req.params.id], (err, results) => {
        if (err) {
            console.log("Theres has been an error while loading the data from the data base 😵‍💫" + err);
        } else {
            res.redirect('/');
        }
    });
})


// router for edit an employee


router.get('/edit/:id', (req, res) => {
    connectDB.query('SELECT * FROM employee WHERE id = ?', [req.params.id], (err, results) => {
        if (err) {
            console.log("Theres has been an error while loading the data from the data base 😵‍💫" + err);
        } else {
            res.render('edit', {employee:results[0]});
        }
    });
})

module.exports = router;