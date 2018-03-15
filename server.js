var express = require("express");
var app = express();
var PORT = 8080;


app.use(express.static(__dirname + '/assets/'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.get("/portfolio", function(req, res) {
	res.sendFile(__dirname + "/portfolio.html");
});

app.get("/contact", function(req, res) {
	res.sendFile(__dirname + "/contact.html");
});

app.get("/skills", function(req, res) {
	res.sendFile(__dirname + "/skills.html");
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });