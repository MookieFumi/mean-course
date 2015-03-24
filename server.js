(function() {
    'use strict';

    var express = require('express'),
        app = express()

    app.use(express.static('public'));

    var server = app.listen(8080, function() {
        console.log('Server is running on port', server.address().port);
    });

})();
