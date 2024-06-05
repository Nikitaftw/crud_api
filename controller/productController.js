const Product = require('../models/shop/Products');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: error.message
        });
    }
}

const getProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findOne({
            where: {
                id: id
            }
        });
        res.status(200).json(product);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: error.message
        });
    }
}

const createProduct = async (req, res) => {
    const { name, price, categoryId } = req.body;

    try {
        const product = await Product.create({
            name,
            price,
            category_id: categoryId
        });
        res.status(200).json(product);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: error.message
        });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, categoryId } = req.body;

    try {
        const product = await Product.update({
            name: name,
            price: price,
            categoryId: categoryId
        }, {
            where: {
                id: id
            }
        });
        res.status(200).json(product);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: error.message
        });
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json(product);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}