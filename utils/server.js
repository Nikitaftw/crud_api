const express = require('express');

const usersRouter = require('../router/users');
const productsRouter = require('../router/products');
const categoriesRouter = require('../router/categories');

const app = express();

app.use(express.json());

app.use(usersRouter);
app.use(productsRouter);
app.use(categoriesRouter);


try {
    app.listen(process.env.PORT, process.env.HOST, (err) => {
        if (err) throw err;
        console.log('Server is running');
    });
} catch (error) {
    console.log(error);
}

module.exports = app;