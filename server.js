const net = require('net');
const server = net.createServer();

server.on('connection', (client) => {
  console.log('A new client connected');
  client.on('data', data => {
    console.log(data.toString());
    client.write('fetcthing data...');
  });
});


server.listen(3000);

