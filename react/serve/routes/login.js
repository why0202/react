var express = require('express');
var router = express.Router();

const {
    find,
    insert,
    del,
    update
} = require('../lib/mongodb.js');
/* GET users listing. */

router.post('/login', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let { username, password } = req.body
    find('user', {
        username,
        password,
    }, (results) => {
        console.log(results);
        res.send(results);
    })
});

module.exports = router;
