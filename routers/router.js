const express = require("express");
const db = require("../firebase").db;
const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  const username = Object.keys(req.body)[0];
  const responseRef = db.ref("chatbot/response/" + username);
  responseRef.set(req.body[username]);
  console.log(username);
  res.send("ok");
});

module.exports = router;
