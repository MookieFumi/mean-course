'use strict';

var express = require('express');
var router = express.Router();

router.get('/help', function(req, res) {
    res.render('help', {
        title: 'Help page',
        message: 'Help page by MookieFumi!'
    });
});

router.get('/help/:content', function(req, res) {
    res.render('help', {
        title: 'Help page',
        message: 'Help page by MookieFumi!',
        content: req.params.content
    });
});



/************************************************************/
/******************* COMPANIES ROUTES ***********************/
/************************************************************/

var companies = [];

router.get('/companies/getAll', function(req, res) {
    res.json(companies);
});

router.post('/companies/add', function(req, res) {
    companies.push({
        name: req.body.name,
        owner: req.body.owner
    });
    res.send();
});

module.exports = router;
