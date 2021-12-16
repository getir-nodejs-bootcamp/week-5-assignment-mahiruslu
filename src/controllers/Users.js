const hs = require('http-status');
const { getAllUsers, getOneUser, insertUser, updateUser, deleteUser } = require('../services/Users');

const getUsers =  (req, res) => {
    getAllUsers()
    .then(users => {
        res.status(hs.OK).send(users);
    }
    )
    .catch(err => {
        res.status(hs.INTERNAL_SERVER_ERROR).send(err);
    });
    
};
const getOne =  (req, res) => {
  getOneUser(req.params.id)
    .then(user => {
        res.status(hs.OK).send(user);
        console.log(user)
        }
    )
    .catch(err => {
        res.status(hs.NOT_FOUND).send(err);
    }
    );
};

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
    getOne,
    insert,
    update
};
