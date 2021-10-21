const express = require("express");
const cors = require("cors");
const url = "http://localhost:9000";
const router = require("./routers/router");
const bodyParser = require("body-parser");
const signup = require("./signup");
const signin = require("./signin");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(router);
app.use(signup);
app.use(signin);

app.listen(9000, () => console.log("App is listening on url " + url));
