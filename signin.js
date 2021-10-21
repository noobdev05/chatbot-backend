const express = require("express");
const auth = require("./firebase").auth
const signin = express.Router();

signin.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    auth.getUserByEmail(email)
        .then((userRecord) => {
         
            console.log('Successfully signin');
            res.send('ok');
        })
        .catch((error) => {
            console.log('Invalid credentials\n', error);
            res.send('error');
        });

});

module.exports = signin;