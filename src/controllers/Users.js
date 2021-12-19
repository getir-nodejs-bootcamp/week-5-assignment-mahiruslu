const hs = require('http-status');
const uuid = require('uuid');
const { getAllUsers, getOneUser, insertUser, updateUser,loginControl,updatePassword, deleteUser } = require('../services/Users');
const { hashPassword,generateAccessToken,generateRefreshToken} = require('../scripts/Utils/helpers');
const eventEmitter = require("../scripts/events/eventEmitter");

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
        }
    )
    .catch(err => {
        res.status(hs.NOT_FOUND).send(err);
    }
    );
};

function insert(req, res) {
    req.body.password = hashPassword(req.body.password);
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

const login = (req, res) => {
    req.body.password = hashPassword(req.body.password);
    loginControl(req.body)
        .then(user => {
            if (!user) return res.status(hs.UNAUTHORIZED).send({ message: 'Invalid email or password' });
            user = {
                ...user.toObject(),
                tokens:{
                    accessToken: generateAccessToken(user),
                    refreshToken: generateRefreshToken(user)
                }
            },
            delete user.password;
            res.status(hs.OK).send(user);
        })
        .catch(err => {
            console.log(err);
            res.status(hs.INTERNAL_SERVER_ERROR).send(err);
        });
};

const resetPassword = (req, res) => {
    const newPassword = uuid.v4().split('-')[0];
    console.log(newPassword);
    req.body.password = hashPassword("newPassword");
    updatePassword({email: req.body.email}, {password : req.body.password})
        .then(user => {
            if(!user) return res.status(hs.NOT_FOUND).send({message: 'User not found'});
            eventEmitter.emit('send_email', "Your new password is: " + newPassword);
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
    update,
    login,
    resetPassword
};
