const net = require('net');
const fs = require('fs');

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

conn.on('data', data => {
  fs.writeFile(`./write/${fileName}`, data, (err) => {
    if (err) {
      console.log('An error occured while writing the file');
    } else {
      conn.end();
    }
  })
});

conn.setEncoding('utf8');