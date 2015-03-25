var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', {
//         title: 'Express'
//     });
// });

router.get('/help', function(req, res, next) {
    res.render('help', {
        title: 'Help page',
        message: 'Help page by MookieFumi!'
    });
});

router.get('/help/:content', function(req, res, next) {
    res.render('help', {
        title: 'Help page',
        message: 'Help page by MookieFumi!',
        content: req.params.content
    });
});

router.get('/companies/getAll', function(req, res, next) {
    res.json([{
        name: 'Company 1',
        owner: 'MookieFumi'
    }, {
        name: 'Company 2',
        owner: 'RaniFumi'
    }, {
        name: 'Company 3',
        owner: 'MontseFumi'
    }]);
});

module.exports = router;
