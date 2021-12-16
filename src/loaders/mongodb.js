const Mongoose = require('mongoose');

const db = Mongoose.connection;

db.once("open", () => {
    console.log("MongoDB is connected");
});

const connectDB = async () => {
    const {DB_HOST, DB_PORT, DB_NAME} = process.env;
    const url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    try {
        await Mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    connectDB
}