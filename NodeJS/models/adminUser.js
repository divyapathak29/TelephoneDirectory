const mongoose = require('mongoose');

var adminUser = mongoose.model('adminUser', {
    username : {type : String},
    password : {type : String}
});

module.exports = { adminUser };