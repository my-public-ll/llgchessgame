var express = require('express');
var util = require('../config/util.js');
var router = express.Router();
var { getBalance } = require('../services/blockchain')


router.get('/', function (req, res) {
    res.render('partials/play', {
        title: 'Chess Hub - Game',
        user: req.user,
        isPlayPage: true
    });
});

router.get('/balance/:address', async function (req, res, next) {
    let address = req.params.address

    if (!util.isValidAddress(address)) {
        res.status(400).send()
        return
    }
    try {
        let balance = await getBalance(address)
        res.status(200).send({ balance: balance })
    } catch (error) {
        next(error)
    }
});

router.post('/', function (req, res) {
    var side = req.body.side;
    //var opponent = req.body.opponent; // playing against the machine in not implemented
    var token = util.randomString(20);
    res.redirect('/game/' + token + '/' + side);
});

module.exports = router;