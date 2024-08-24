import nodemailer from 'nodemailer';


// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // or use 'smtp' for a custom SMTP server
    auth: {
        user: 'ManushiForYou@gmail.com', 
        pass: 'Manushi@2024',  
    },
});

// Function to send email
export const sendEmail = (recipientEmail, message) => {
    const subject = 'Application Received';
    const text = `Hey ${recipientEmail},\n\nHope you're doing fine.\n\nWe have received your application. Your message is ${message} and you will be hearing soon from our side.\n\nStay happy!\nManushi`;

    const mailOptions = {
        from: 'ManushiForYou@gmail.com',  // Sender address
        to: recipientEmail,            // Recipient address
        subject: subject,              // Subject line
        text: text,                    // Plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
