var express = require('express');
var router = express.Router();

const {
    find,
    insert,
    del,
    update
} = require('../lib/mongodb.js');
/* GET home page. */
router.post('/add', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let { name, qes, stuid, time, ans } = req.body
    insert('problem', [{
        'stuid': stuid * 1,
        'name': name,
        'qes': qes,
        'time': time,
        'res': ans * 1
    }], (result) => {
        console.log(result);
        res.send(result)
    })
});

router.get('/find', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let { stuid } = req.query
    find('problem', {
        'stuid': stuid * 1
    }, (result) => {
        console.log(result);
        res.send(result)
    })
});
module.exports = router;
