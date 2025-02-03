const ngrok = require('ngrok');
const { spawn } = require('child_process');

(async () => {
    const url = await ngrok.connect(3000);
    console.log(`ngrok tunnel opened at ${url}`);
    const receiveWhatsAppMessageProcess = spawn('node', ['incomingMessage.js'], { stdio: 'inherit', });
    process.on('SIGINT', async () => {
        console.log('Shutting down…');
        await ngrok.kill();
        receiveWhatsAppMessage
        Process.kill('SIGINT');
        process.exit(0);
    });
})();