const usersRouter = require('express').Router();
const usersActions = require('../Controllers/user-controller');

usersRouter.get('/', usersActions.getAllUser);
usersRouter.get('/:id', usersActions.getUserById);
usersRouter.post('/', usersActions.postUser);
usersRouter.put('/:id',usersActions.putUser);
usersRouter.delete('/:id',usersActions.deleteUser);

module.exports = usersRouter;