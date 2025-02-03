
const Twilio = require('twilio')
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;


const client = new Twilio(accountSid, authToken);

const sendWhatsAppMessage = async (req, res, next) => {

    try {
        const response = await client.messages.create({
            body: req.body.message,
            from: 'whatsapp:+14155238886', // Your Twilio Sandbox Number
            to: `whatsapp:${process.env.PHONE_NUMBER}`,
        });
        console.log(`Message sent to  ${response.sid}`);
        res.status(200).send(`Message sent to : ${response.sid}`)
    } catch (error) {
        console.error(`Failed to send message: ${error}`);
    }
}

module.exports = sendWhatsAppMessage