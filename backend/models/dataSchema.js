
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Task
var Task = Schema({
    name: {type: String},
    time: {type: String}
});

module.exports = mongoose.model('User', Task);

