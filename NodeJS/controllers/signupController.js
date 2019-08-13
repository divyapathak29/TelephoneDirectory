
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var { adminUser } = require('../models/adminUser');

//Insert new admin user details #signup
router.post('/', (req, res) => {
    var user = new adminUser({
        username : req.body.username,
        password : req.body.password
    });

    user.save((err, docs) => {
        if (!err) { 
            res.send(docs); 
        } else {
            console.log('Error in saving User: ' + JSON.stringify(err, undefined, 2));
        } 
    });
});

module.exports = router;