var express = require("express");
var app = express();
var http = require("http").Server(app);
var fs = require("fs");
var path = require("path");

http.listen(80, function() {
    console.log("Website is up and running <3");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    var homepagePath = path.join(__dirname, "./public/index.html");
    fs.readFile(homepagePath, "UTF-8", function(err, html) {
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.write(html);
        res.end();
    });
});
