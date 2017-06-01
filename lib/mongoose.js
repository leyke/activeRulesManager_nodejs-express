/**
 * Created by Артём on 01.06.17.
 */
var mongoose = require('mongoose');
var config = require('config');

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;