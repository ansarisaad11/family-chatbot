const { Console } = require('winston/lib/winston/transports');

const MessagingResponse = require('twilio').twiml.MessagingResponse;

const userSessions = {};


const incomingMessage = async (req, res, next) => {


    const from = req.body.From;
    const message = req.body;
    console.log(`Received message from ${message.From}: ${message.Body}`);
    const twiml = new MessagingResponse();

    if (!userSessions[from]) {
        userSessions[from] = { step: 1 };
        twiml.message(`Tell me about your samaj. What is the name of your samaj?`);
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
    } else {
        let session = userSessions[from];
        if (session.step === 1) {
            session.samaj = message.Body;
            session.step = 2;
            twiml.message(`What is your name?`);
            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.end(twiml.toString());
        }
        else if (session.step === 2) {
            session.name = message.Body;
            session.step = 3;
            twiml.message(`What is your age?`);
            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.end(twiml.toString());
        }
        else if (session.step === 3) {
            session.age = message.Body;
            session.step = 4;
            twiml.message(`Great! What is your gender (Male/Female/Other)?`);
            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.end(twiml.toString());
        } else if (session.step === 4) {

            session.gender = message.Body;
            session.step = 5
            twiml.message(`Please share your phone number (eg : 9992221119 , 9911224433)`);
            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.end(twiml.toString());
        }
        else if (session.step === 5) {
            session.phone1 = message.Body;
            session.step = 6;
            twiml.message(`Thank you for sharing the info.`);
            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.end(twiml.toString());
            delete userSessions[from];
        }
        // Save to database
        // await db.query(
        //     "INSERT INTO users (phone_number, name, age, gender) VALUES ($1, $2, $3, $4) ON CONFLICT (phone_number) DO UPDATE SET name = $2, age = $3, gender = $4",
        //     [from, session.name, session.age, session.gender]
        // );


        // delete userSessions[from]; // Clear session after completion


    }
    console.log(userSessions)

}

module.exports = incomingMessage;