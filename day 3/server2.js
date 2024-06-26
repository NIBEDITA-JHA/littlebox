const express = require("express");
const bodyParser = require("body-parser");
const app= express();
app.use(bodyparser.json());
const port = 8000;
app.listen(port, () => console.log(`App started at port${port}`));
