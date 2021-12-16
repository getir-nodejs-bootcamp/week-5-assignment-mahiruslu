const hs = require('http-status');
const { getAllUsers, insertUser, updateUser, deleteUser } = require('../services/Users');

const getUsers =  (req, res) => {
    const users =  getAllUsers();
    res.status(hs.OK).send(users);
};
const getOneUser =  (req, res) => {
  getAllUsers()?.find(user => user.id === req.params.id)
    .then(user => {
        if (!user) {
            res.status(hs.NOT_FOUND).send({
                message: 'User not found'
            });
            return;
        }
    res.status(hs.OK).send(user);
}).catch(err => {
    res.status(hs.INTERNAL_SERVER_ERROR).send(err);
});
}

function insert(req, res) {
    insertUser(req.body)
        .then(user => {
            res.status(hs.CREATED).send(user);
        })
        .catch(err => {
            res.status(hs.INTERNAL_SERVER_ERROR).send(err);
        });
}

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
    getUsers,
    getOneUser,
    insert,
    update
};
