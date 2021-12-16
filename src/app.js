const express = require('express');
const { ProductsRouter, UsersRouter } = require('./routes');

const config  = require('./config');
const loaders = require('./loaders');

config();
loaders();

const app = express();

app.use(express.json());

app.listen(process.env.SERVER_PORT || 4545, ()=>{
    console.log(`Server is running on port ${process.env.SERVER_PORT || 4545}`);

    app.use('/users', UsersRouter);
    app.use('/products', ProductsRouter);
});
