const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
        </ul>
        <p>${message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 587,
        secure: false,
        auth: {
            user: '723ced5c21a4e6',
            pass: 'b85f5dd8956f56'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"ColaboroDev" <colaborodev@example.com>', // sender address,
        to: 'adduser@example.com',
        subject: 'Website Contact Form',
        html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);
    
    res.redirect('/index.html');
});

module.exports = router;