let router = require('express').Router();

router.use('/', require('./home'));
router.use('/event', require('./event'));

module.exports = router;