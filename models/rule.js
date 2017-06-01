/**
 * Created by Артём on 01.06.17.
 */
var async = require('async');
var util = require('util');

var mongoose = require('lib/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type: String
    },
    events_id: {
        type: String
    },
    condition_id: {
        type: String
    },
    state: {
        type: String
    },
    comment: {
        type: String
    },
    rules_id: {
        type: String
    },
    db_id: {
        type: String
    }

});