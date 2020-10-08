const express = require('express');
const router = express.Router();

const cy = require('../services/run_cypress')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/run', async function (req, res, next) {
    let results = await cy()
    res.json(results)
});

module.exports = router;
