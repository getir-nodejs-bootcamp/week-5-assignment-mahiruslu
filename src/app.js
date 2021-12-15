const express = require('express');
const { ProductsRouter } = require('./routes');

const app = express();

app.use(express.json());

app.listen(process.env.SERVER_PORT || 4545, ()=>{
    console.log(`Server is running on port ${process.env.SERVER_PORT || 4545}`);

    app.use('/products', ProductsRouter);
});
