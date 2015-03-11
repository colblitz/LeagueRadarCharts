var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write('<!doctype html><html ng-app><head><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.4/angular.min.js"></script></head><body><div><label>Name:</label><input type="text" ng-model="yourName" placeholder="Enter a name here"><hr><h1>Hello {{yourName}}!</h1></div></body></html>');
  res.end();

  /* res.render('index', { title: 'Express' }); */
});

module.exports = router;
