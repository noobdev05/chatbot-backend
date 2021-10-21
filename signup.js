const express = require("express");
const auth = require("./firebase").auth;
const signup = express.Router();

signup.post("/signup", async (req, res) => {
<<<<<<< HEAD
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);
  console.log(password);
  // const {email, password} = req.body;

  auth
    .createUser({
      email: email,
      password: password,
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully created new user:", userRecord.uid);
      res.send("ok");
    })
    .catch((error) => {
      console.log("Error creating new user:", error);
      res.send("Life Sucks");
    });
=======
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    
    auth.createUser({
        email: email,
        password: password,
    })
        .then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully created new user:', userRecord.uid);
            res.send("ok");
        })
        .catch((error) => {
            console.log('Error creating new user:', error);
            res.send("Error creating new user");
        });
    
>>>>>>> b802a2305955cd75d680e806a0d58b0cbfb48839
});

module.exports = signup;
