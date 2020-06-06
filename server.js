const net = require('net');
const fs = require('fs');
const server = net.createServer();

server.on('connection', (client) => {
  console.log('A new client connected');
  client.on('data', data => {
    fs.readFile(data.toString(), 'utf8', (err, file) => {
      if (err) {
        console.log(err);
      } else {
        client.write(file);
      }
    })
  });
});

server.listen(3000);

