const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


var ObjectId = mongoose.Types.ObjectId;
var { Contact } = require('../models/contact');

//Fetch contact details
router.get('/', (req, res) => {
    Contact.find((err, docs) => {
        if (!err) { 
            res.send(docs); 
        } else {
            console.log('Error in finding Contact: ' + JSON.stringify(err, undefined, 2));
        } 
    });
});

//Fetch contact details by id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Record not found for id: ' + req.params.id);
    }

    Contact.findById(req.params.id, (err, docs) => {
        if (!err) { 
            res.send(docs); 
        } else {
            console.log('Error in finding Contact: ' + JSON.stringify(err, undefined, 2));
        }
    })
});

//Insert new contact details
router.post('/', (req, res) => {
    var contact = new Contact({
        photo : req.body.photo,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        mobileNumber : req.body.mobileNumber,
        landlineNumber : req.body.landlineNumber,
        notes : req.body.notes,
        createdOn : req.body.createdOn,
        viewCount : req.body.viewCount
    });

    contact.save((err, docs) => {
        if (!err) { 
            res.send(docs); 
        } else {
            console.log('Error in saving Contact: ' + JSON.stringify(err, undefined, 2));
        } 
    });
});

//Update contact details
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Record not found for id: ' + req.params.id);
    }

    var contact = {
        photo : req.body.photo,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        mobileNumber : req.body.mobileNumber,
        landlineNumber : req.body.landlineNumber,
        notes : req.body.notes,
        createdOn : req.body.createdOn,
        viewCount : req.body.viewCount
    };
    
    Contact.findByIdAndUpdate(req.params.id, { $set: contact }, { new : true }, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in updating id: ' + req.params.id);
        }
    });
});

//Delete contact details
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Record not found for id: ' + req.params.id);
    }

    Contact.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in removing contact: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;