
const MessagingResponse = require('twilio').twiml.MessagingResponse;


const incomingMessage = async (req, res, next) => {
    console.log(req.body)
    const message = req.body;
    console.log(`Received message from ${message.From}: ${message.Body}`);
    const twiml = new MessagingResponse();
    twiml.message(`You said: ${message.Body}`);
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

module.exports = incomingMessage;