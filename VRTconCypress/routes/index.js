const express = require('express');
const router = express.Router();

const add = require('../services/add_test')

let tests = []

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {tests});
});

router.get('/run', async function (req, res, next) {
    add((data => {
        tests.push(data)
        console.log(tests)
        res.redirect('/');
    }))
});

module.exports = router;
