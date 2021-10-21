const express = require("express");
const auth = require("./firebase").auth;
const signup = express.Router();

signup.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  auth
    .createUser({
      email: email,
      password: password,
    })
    .then((userRecord) => {
      console.log("Successfully created new user:", userRecord.uid);
      res.send("ok");
    })
    .catch((error) => {
      console.log("Error creating new user:", error);
      res.send("Error creating new user");
    });
});

module.exports = signup;
