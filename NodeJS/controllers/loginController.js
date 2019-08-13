const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({extended:false});

var { adminUser } = require('../models/adminUser');

//Insert new contact details
router.post('/', (req, res) => {
    adminUser.findOne({ username: req.body.username}, function(err, user) { 
        var err_msg = {"err_msg" : "Login invalid"};
        if(user === null){
            res.send(err_msg);
        } else if (user.username === req.body.username && user.password === req.body.password){
            res.send(user);
          } else {
            console.log("Credentials wrong");
            res.send(err_msg);
          }
    });
});

module.exports = router;