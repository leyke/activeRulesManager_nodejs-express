
/**
 * Created by Артём on 21.05.17.
 */
/*
 * GET settings page
 */


exports.index = function(req, res){
    res.render('settings', { title: 'Active Rules System' });
};