/**
 * Created by Артём on 01.06.17.
 */
exports.post = function(req, res) {
    req.session.destroy();
    res.redirect('/');
};