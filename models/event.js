/**
 * Created by Артём on 01.06.17.
 */
var async = require('async');
var util = require('util');

var mongoose = require('lib/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    eventType: {
        type: String
    },
    optionsEvent: {
        type: String
    },
    sourceEvent: {
        type: String
    },
    categoryEvent: {
        type: String
    }

});