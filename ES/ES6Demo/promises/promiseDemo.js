//getting data from url by async
var fetch = require("node-fetch");
var async = require('async');
var bodyParser = require('body-parser');

var showUser=async function(){
var users=await fetch("https://jsonplaceholder.typicode.com/users");
var val=await users.json();
console.log(val)
};
showUser();