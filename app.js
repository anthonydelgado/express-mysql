var express = require('express');
var mysql = require('mysql');

var app = express();

var port = 3000;

var connection = mysql.createConnection({
   host: "localhost",
   user: "homestead",
   password: "secret"
});