const express = require('express');

const app = express();

app.get('/api', function(req, res){
    res.send("You made it to the API!")
})

app.get('/getlatlong', function(req, res){
    res.send("You requested coordinates!")
})


app.listen(8080);