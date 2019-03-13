const express = require("express");const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true })); //make json data readble(postman work)
app.use(bodyParser.urlencoded({ extended: true })); // make form data readble(web inputs work)

app.set('view engine', 'ejs');

var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});
