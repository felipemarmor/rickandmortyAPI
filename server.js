const http = require('http');
const app = require('./routes/app');

const port = process.env.PORTA;
const server = http.createServer(app);

server.listen(3000);