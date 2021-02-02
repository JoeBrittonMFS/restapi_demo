const { router } = require('express');
const { User } = require('../models/User.js');
const {getAllUsers, addUser, updateUserById, deleteUser} = require('../controllers/users.js');
const userRouter = Router();


userRouter.get("/users", getAllUsers);
userRouter.post("/users", addUser)
userRouter.patch("/users/:id", updateUserById);
userRouter.delete("/users/:id", deleteUser);

// Tidier way
// userRouter.route('/users').get(getAllUsers).post(addUser)
// userRouter.route('/users/:id').patch(updateUserById).delete(deleteUser);

module.exports = {
    userRouter,
}