import express from 'express';
import { sendEmail } from './Mailer.js'; // Assume this is the file where the sendEmail function is defined

const app = express();

app.use(express.json());

app.post('/api/send-email', (req, res) => {
    const { email, phone, message } = req.body;

    if (!email || !phone || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Send the email
    sendEmail(email, message);

    res.json({ message: 'Email sent successfully' });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
