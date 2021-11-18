const database = require('../database/database');


// method to insert user from the form


exports.save = (req, res) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const description = req.body.description;

    database.query('INSERT INTO employee (name, lastname, description) VALUES (?, ?, ?)', [name, lastname, description], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.redirect('/');
        console.log("User has been added: " + name, lastname, description);
        console.log(result);
    })
}


// method to update user


exports.update = (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const description = req.body.description;

    console.log("User has been updated: " + name, lastname, description);

    database.query('UPDATE employee SET ? WHERE id = ?', [{name:name, lastname:lastname, description:description}, id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.redirect('/');
        console.log(result);
    })
}