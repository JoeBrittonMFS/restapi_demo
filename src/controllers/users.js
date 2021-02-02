const { User } = require("../models/User");

const getAllUsers = async (req, res) => { // sends a response
    try {
        const allUsers = await User.find({});
        res.status(200).send(allUsers); 
    } catch (error) {
        res.status(500).send(error);
    }
};

const addUser = async (req, res) => { // WHen using trycatch, it requires async
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        console.log(req.body);
        res.status(201).send(savedUser);
    } catch (error) {
        res.status(500).send({ message: "Could not connect" })
    }
};

const updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(user);
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send( { message: "User not found" } )
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send( { message: "User not found" } );
    }
};

module.exports = {
    getAllUsers,
    addUser,
    updateUserById,
    deleteUser
}