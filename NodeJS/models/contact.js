const mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {
    photo : {type : String},
    firstName : {type : String},
    lastName : {type : String},
    email : {type : String},
    mobileNumber : {type : Number},
    landlineNumber : {type : Number},
    notes : {type : String},
    createdOn : {type : Date},
    viewCount : {type : Number}
});

module.exports = { Contact };