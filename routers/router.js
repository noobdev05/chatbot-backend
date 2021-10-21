const express = require("express");
const db = require("../firebase").db;
const router = express.Router();
const options = require("../questions").options;

const calculator = (response) => {
  let i = 0;
  let sum = 0;
  response.forEach((a) => {
    sum += options[i][a];
    i += 1;
  });
  return sum / 11;
};

router.post("/", async (req, res) => {
  // console.log(req.body);
  const username = Object.keys(req.body)[0];
  const responseRef = db.ref("chatbot/response/" + username);
  responseRef.set(req.body[username]);
  const response = [];
  Object.keys(req.body[username]).forEach(function (key) {
    response.push(parseInt(req.body[username][key]));
  });
  // console.log(response);
  const score = calculator(response);
  // console.log(username);
  console.log(score);
  res.send(String(score));
});

module.exports = router;
