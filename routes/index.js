/**
 * Created by Артём on 01.06.17.
 */
var checkAuth = require('middleware/checkAuth');
var HttpError = require('error').HttpError;

module.exports = function(app) {

    app.get('/', require('./startpage').get);

    app.get('/login', require('./login').get);
    app.post('/login', require('./login').post);

    app.post('/logout', require('./logout').post);

    app.get('/construct', checkAuth, require('./construct').get);
    app.get('/auditor', checkAuth, require('./auditor').get);
    app.get('/settings', checkAuth, require('./settings').get);

    app.get('/analize', function(req, res, next) {
        return next(new HttpError(404, 'Страница не найдена, либо находится в разработке'))
    });
};
