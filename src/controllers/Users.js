const hs = require('http-status');
const { getAllUsers, insertUser, updateUser, deleteUser } = require('../services/Users');

const get =  (req, res) => {
    const users =  getAllUsers();
    res.status(hs.OK).send(users);
};

const insert =  (req, res) => {
    insertUser(req.body)
    .then(user => {
        res.status(hs.CREATED).send(user);
    })
    .catch(err => {
        res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    });
};

const update =  (req, res) => {
    updateUser(req.params.id, req.body)
    .then(user => {
        res.status(hs.OK).send(user);
    })
    .catch(err => {
        res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    });
};



module.exports = {
    get,
    insert,
    update
};
