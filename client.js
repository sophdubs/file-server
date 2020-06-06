const net = require('net');

const fileName = process.argv.slice(2)[0];

const conn = net.createConnection({
  host: 'localhost',
  port: 3000
}, () => {
  console.log('connected to the server');
});

conn.on('connect', () => {
  conn.write(fileName);
});

conn.setEncoding('utf8');