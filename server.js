const net = require('net');
const fs = require('fs');
const server = net.createServer();

server.on('connection', (client) => {
  console.log('A new client connected');
  client.on('data', data => {
    fs.readFile(data.toString(), 'utf8', (err, file) => {
      if (err) {
        client.write('ERROR');
      } else {
        client.write(file);
      }
    })
  });
});

server.listen(3000);

