var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('post to login');
});

router.post('/', function(req, res, next){
    res.send(req.body);
});

module.exports = router;
