const userRouter = require('express').Router();
const userActions = require('../Controllers/user-controllerr');

userRouter.get('/', userActions.getAllUser);
userRouter.get('/:id', userActions.getUserById);
userRouter.post('/', userActions.postUser);
userRouter.put('/:id',userActions.putUser);
userRouter.delete('/:id',userActions.deleteUser);

module.exports = userRouter;