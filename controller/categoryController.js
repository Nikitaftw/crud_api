const Category = require('../models/shop/Category');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

const getCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const category = Category.findOne({
            where: {
                id: id
            }
        });
        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

const createCategory = async (req, res) => {
    const { name } = req.body;

    try {
        const category = Category.create({
            name: name
        }
        );
        res.status(201).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const category = Category.update({
            name: name
        }, {
            where: {
                id: id
            }
        });
        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

const deleteCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const category = Category.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};