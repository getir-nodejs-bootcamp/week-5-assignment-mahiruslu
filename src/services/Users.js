const User = require('../models/User');
const Product = require('../models/Product');
const hs = require('http-status');

const getAllUsers = () => {
    return User.find({});
};

const getOneUser = (id) => {
    const user = User.findOne({_id: id});
    return user;
};

const loginControl = (where) => {
    const user = User.findOne(where);
    return user;
};

const insertUser = (data) => {
    return new User(data).save();
};

const updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
        if (err) {
            res.status(hs.INTERNAL_SERVER_ERROR).send(err);
        }
        res.status(hs.OK).send(user);
    });
};

const deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            res.status(hs.INTERNAL_SERVER_ERROR).send(err);
        }
        res.status(hs.OK).send(user);
    });
};


module.exports = {
    getAllUsers,
    getOneUser,
    insertUser,
    updateUser,
    deleteUser,
    loginControl
};