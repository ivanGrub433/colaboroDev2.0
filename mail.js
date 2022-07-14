/*---Mail sender---*/
const nodemailer = require("nodemailer");

const $form = document.querySelector('form');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const form = new FormData($form);
    console.log(form.get('name'));
    console.log(form.get('email'));
    console.log(form.get('message'));

        exports.sendEmail = function(req, res){
                var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                user: 'colaboroprueba@gmail.com',
                pass: 'vcguxqdostztnwlt'
                }
            });
            
            var mailOptions = {
                from: 'colaboroprueba@gmail.com',
                to: 'colaborodestino@gmail.com',
                subject: `Cliente: ${form.name}, Email: ${form.email}`,
                text: form.message
            };
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log('Email sent: ' + info.response);
                }
            });
        };
}