var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us - Navlakha Tech' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us - Navlakha Tech' });
});

module.exports = router;
