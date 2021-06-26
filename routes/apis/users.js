const { Router } = require('express');

const userRouter = Router({ mergeParams: true });

userRouter.get('', (req, res) => {});

module.exports = userRouter;
