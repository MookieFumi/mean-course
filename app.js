// // set DEBUG=mean-course & nodemon app.js

// 'use strict';

// var bodyParser = require('body-parser');
// var colors = require('colors');
// var cookieParser = require('cookie-parser');
// var debug = require('debug')('mean-course:server');
// var express = require('express');
// var morgan = require('morgan');
// var favicon = require('serve-favicon');
// var fs = require('fs');
// var path = require('path');
// var http = require('http');
// var passport = require('passport');

// var app = express();

// var info = 'Current folder: ' + process.cwd() + '. Environment: ' + process.env.NODE_ENV;
// console.log(info.yellow.bgBlue);

// configureLogger(app);

// // view engine setup
// app.set('views', path.join(process.cwd(), 'views'));
// app.set('view engine', 'jade');

// app.use(favicon(process.cwd() + '/public/favicon.ico'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(cookieParser());






// app.use(express.static(path.join(process.cwd(), 'public')));
// var routes = require('./routes/index');
// app.use('/', routes);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

// /**
//  * Get port from environment and store in Express.
//  */

// var port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);

// /**
//  * Create HTTP server.
//  */

// var server = http.createServer(app);

// server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);

// /**
//  * Normalize a port into a number, string, or false.
//  */

// function normalizePort(val) {
//     var port = parseInt(val, 10);

//     if (isNaN(port)) {
//         // named pipe
//         return val;
//     }

//     if (port >= 0) {
//         // port number
//         return port;
//     }

//     return false;
// }

// /**
//  * Event listener for HTTP server "error" event.
//  */

// function onError(error) {
//     if (error.syscall !== 'listen') {
//         throw error;
//     }

//     var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

//     // handle specific listen errors with friendly messages
//     switch (error.code) {
//         case 'EACCES':
//             console.error(bind + ' requires elevated privileges');
//             process.exit(1);
//             break;
//         case 'EADDRINUSE':
//             console.error(bind + ' is already in use');
//             process.exit(1);
//             break;
//         default:
//             throw error;
//     }
// }

// /**
//  * Event listener for HTTP server "listening" event.
//  */

// function onListening() {
//     var addr = server.address();
//     var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
//     var text = 'Listening on ' + bind;
//     console.log(text.yellow.bgBlue);
// }

// function configureLogger(app) {
//     //Morgan
//     var accessLogStream = fs.createWriteStream(process.cwd() + '/access.log', {
//         flags: 'a'
//     });

//     if (app.get('env') == 'production') {
//         app.use(morgan('combined', {
//             skip: function(req, res) {
//                 return res.statusCode < 400;
//             },
//             stream: accessLogStream
//         }));
//     } else {
//         app.use(morgan('dev'));
//         app.use(morgan('combined', {
//             stream: accessLogStream
//         }));
//     }
// }


'use strict';

// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dbconfig = require('./db.js');
var cookieParser = require('cookie-parser');
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Create our Express application
var app = express();

// // view engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'jade');

// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

router.get('/', function(req, res) {
    res.render('index', {
        user: req.user
    });
});

// Create our Express router
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


var companies = [];
router.get('/api/companies/getAll', function(req, res) {
    res.json(companies);
});

router.post('/api/companies/add', function(req, res) {
    companies.push({
        name: req.body.name,
        owner: req.body.owner
    });
    res.send();
});


// Register all our routes with /api
app.use('/', router);
//static files
app.use(express.static(path.join(process.cwd(), 'public')));

// Start the server
app.listen(3000);
