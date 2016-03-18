var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/rooms/', function(req, res, next) {
  // res.send(req.body.roomName.toUpperCase())
  res.render('room', { strawberry: req.body.roomName.toUpperCase() })
});

module.exports = router;
