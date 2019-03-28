const express = require('express');
const axios = require('axios');
const bodyParser = require("body-parser");

const app = express();
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', function (req, res) {
//     res.send('URL Recieved');
//     // console.log(req.body.url);
// })


app.post('/',function(req,res) {
    res.send("Post request send");
    console.log(req.body);
});


const server = app.listen(5000, function () {
    console.log('Node server is running..');
});