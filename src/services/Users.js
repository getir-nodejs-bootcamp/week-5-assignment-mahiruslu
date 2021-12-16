const User = require('../models/User');
const Product = require('../models/Product');
const hs = require('http-status');

const getAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.status(hs.INTERNAL_SERVER_ERROR).send(err);
        }
        res.status(200).send(users);
    });
};

const insertUser = (req, res) => {
    const user = new User(req.body);
    return user.save((err, user) => {
        if (err) {
            res.status(hs.INTERNAL_SERVER_ERROR).send(err);
        }
        res.status(hs.CREATED).send(user);
    });
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
    insertUser,
    updateUser,
    deleteUser
};