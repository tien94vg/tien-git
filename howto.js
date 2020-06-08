const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express()
app.use
app.get('/home/', function (req, res) {    
    const link = path.join(__dirname, './wep.html')    
    res.sendFile(link)
    
    
})

app.listen(3023)

// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//   res.send('ten: ' + req.query.abc);
// });

// app.listen(3000);

    // var express = require('express');
    // var app = express();
    // app.get('/:number1/:number2', function(req, res) {
    //     var number1 = parseInt(req.params.number1);
    //     var number2 = parseInt(req.params.number2);
    //     res.json(number1*number2);    
    // });

    // app.listen(3000);

  
    