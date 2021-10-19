const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(9000, () =>
  console.log("App is listening on url http://localhost:9000")
);
