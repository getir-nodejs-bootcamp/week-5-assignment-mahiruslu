const eventEmitter = require('./eventEmitter');
const nodemailer = require('nodemailer');

module.exports = () =>{
    eventEmitter.on('send_email', async (user) => {
      console.log(user);
        async function main() {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
          
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
              host: process.env.EMAIL_HOST,
              port: 587,
              secure: false, // true for 465, false for other ports
              auth: {
                user: process.env.EMAIL_USER, // generated ethereal user
                pass: process.env.EMAIL_PASS, // generated ethereal password
              },
            });
          
            // send mail with defined transport object
            let info = await transporter.sendMail({
              from: "Gelsin-app password change", // sender address
              to: user.email, // list of receivers
              subject: "Your password has been changed ✔", // Subject line
              html: `Your new password has been created. New password is: <b>${user.newPassword}</b>`, // html body
            });
          
            console.log("Message sent: %s", info.messageId);
          }
          main().catch(console.error);
    });
    
}