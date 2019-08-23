var express = require('express');
var router = express.Router();
const {
    find,
    del,

} = require('../lib/mongodb.js')
/* GET home page. */
router.get('/get', function (req, res, next) {
    find('goodlist', {}, (results) => {
        // console.log(results);
        res.send(results)
    })
});

router.post('/del', function (req, res, next) {
    let { id } = req.body
    console.log(id);
    del('goodlist', {
        id: id * 1
    }, (result) => {
        // console.log(result);
    })
})

router.post('/search', function (req, res, next) {
    let { key } = req.body
    // console.log(key);
    let reg = new RegExp(key, "g")
    find('goodlist', {
        "title": reg
    }, (result) => {
        // console.log(result);
        res.send(result)
    })
})

router.post('/searchtype', function (req, res, next) {
    let { key } = req.body
    // console.log(key);
    let reg = new RegExp(key, "g")
    find('goodlist', {
        "type": reg
    }, (result) => {
        // console.log(result);
        res.send(result)
    })
})


module.exports = router;
