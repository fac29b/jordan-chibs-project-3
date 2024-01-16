const express = require("express");
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require("path");
const server_port = process.env.PORT || 3001;

const public = path.join(__dirname, "../public");

app.use("/public", express.static(public));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const usersRoute = require('./routes/users')

//register routes
app.use('/users', usersRoute);

app.listen(server_port, () => {
  console.log(`App running at port ${server_port}`);
});