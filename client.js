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
  if (data === 'ERROR') {
    console.log('An error occured while reading the file');
    conn.end();
    return;
  }
  fs.writeFile(`./write/${fileName}`, data, (err) => {
    if (err) {
      console.log('An error occured while writing the file');
      conn.end();
    } else {
      console.log(`Successfully copied the file to './write/${fileName}'`);
      conn.end();
    }
  })
});

conn.setEncoding('utf8');