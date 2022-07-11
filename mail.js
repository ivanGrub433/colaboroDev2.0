/*---Mail sender---*/
const $form = document.querySelector('form');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const form = new FormData($form);
    console.log(form.get('name'));
    /*
    var nodemailer = require('nodemailer');
        exports.sendEmail = function(req, res){
                var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                user: 'youremail@gmail.com',
                pass: 'yourpassword'
                }
            });
            
            var mailOptions = {
                from: 'youremail@gmail.com',
                to: 'myfriend@yahoo.com',
                subject: `form.`,
                text: 'That was easy!'
            };
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log('Email sent: ' + info.response);
                }
            });
        };
    */
}

