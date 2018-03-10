var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// require("./app/routes/apiRoutes")(app);
// require("./app/routes/htmlRoutes")(app);

console.log("Server node file started.")

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});