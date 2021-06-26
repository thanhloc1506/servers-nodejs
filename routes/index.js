const { Router } = require('express');

const userRouter = require('./users');

const router = Router({ mergeParams: true });

router.use('/users', userRouter);

module.exports = router;
