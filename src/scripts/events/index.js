const eventEmitter = require('./eventEmitter');
module.exports = () =>{
    eventEmitter.on('send_email', (user) => {
        console.log(user);
    });
}