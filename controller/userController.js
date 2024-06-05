const User = require('../models/shop/Users');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(201).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({
            where: {
                id: id
            }
        });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const user = User.update({
            name: name,
            email: email
        },
            {
                where: {
                    id: id
                }
            });

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.destroy({
            where: {
                id: id
            }
        });

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}