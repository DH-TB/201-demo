import express from 'express';

const router = express.Router();

router.use('/',require('./item'));
router.use('/',require('./category'));

module.exports = router;



