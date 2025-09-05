const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail', // or another email service
    auth: {
        user: 'deepaksingh30012004@gmail.com',
        pass: 'fqwkbhksivrdqjui'
    }
});

module.exports=transport;