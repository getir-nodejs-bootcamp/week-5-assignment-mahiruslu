const express = require('express');
const { ProductsRouter, UsersRouter } = require('./routes');

const config  = require('./config');
const loaders = require('./loaders');
const events = require('./scripts/events');

config();
loaders();
events();

const app = express();

app.use(express.json());

app.listen(process.env.SERVER_PORT || 4545, ()=>{
    console.log(`Server is running on port ${process.env.SERVER_PORT || 4545}`);

    app.use('/users', UsersRouter);
    app.use('/products', ProductsRouter);

    app.use((req,res,next) => {
        const error = new Error('Not found');
        error.status = 404;
        next(error);
    });

    app.use((error,req,res,next) => {
        res.status(error.status || 500);
        res.json({
            error: {
                message: error.message
                
            }
        });
    });
});
