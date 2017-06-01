/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
var log = require('libs/log')(module);

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'ejs');

app.use(express.favicon());
if (app.get('env') === 'development') {
    app.use(express.logger('dev'));
} else {
    app.use(express.logger('default'));
}
app.use(express.json());
app.use(express.urlencoded());
app.use(express.session({ secret: 'your secret here' }));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(config.get('port'), function(){
    log.info('Express server listening on port ' + config.get('port'));
});


app.use(express.static(path.join(__dirname, 'public')));

var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch([__dirname + "/public", __dirname + "/templates", __dirname + "/layout", __dirname + "/partials"]);

// Middleware
app.use(function(req, res, next) {
    if (req.url === '/') {
        res.render("index");
    } else {
        next();
    }
});
app.use(function(req, res, next) {
    if (req.url === '/settings') {
        res.render("settings");
    } else {
        next();
    }
});
app.use(function(req, res, next) {
    if (req.url === '/audit') {
        res.render("auditor");
    } else {
        next();
    }
});
app.use(function(req, res, next) {
    if (req.url === '/constructor') {
        res.render("construct");
    } else {
        next();
    }
});
app.use(function(req, res) {
    res.render("404");
});

app.use(function(err, req, res, next) {
    // NODE_ENV = 'production'
    if (app.get('env') === 'development') {
        var errorHandler = express.errorHandler();
        errorHandler(err, req, res, next);
    } else {
        res.send(500);
    }
});
/*
var routes = require('./routes');
var user = require('./routes/user');

app.get('/users', user.list);


*/