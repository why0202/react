var express = require('express');
var router = express.Router();
const {
    find,
    update,
    insert

} = require('../lib/mongodb.js')
/* GET home page. */
router.post('/find', function (req, res, next) {
    let { id } = req.body
    find('goodlist', {
        id: id * 1
    }, (results) => {
        // console.log(results);
        res.send(results)
    })
});

router.post('/update', function (req, res, next) {
    let { id, name, subhead, price, oldprice, kucun, type, info, } = req.body
    update('goodlist', {
        "id": id * 1
    }, {
            name, subhead, price, oldprice, kucun, type, info,
        }, (results) => {
            res.send(results)
        })
});
router.post('/add', function (req, res, next) {
    let { name, subhead, price, oldprice, kucun, type, info, addtime } = req.body
    insert('goodlist', [{
        name, subhead, price, oldprice, kucun, type, info, addtime
    }], (results) => {
        res.send(results)
    })
});



module.exports = router;
