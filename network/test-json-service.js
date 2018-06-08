'use strict'

const net = require('net')

const server = net.createServer((connection) => {
  console.log('Subscriber connected');

  const firstChunk = '{"type":"changed","timesta';
  const secondChunk = 'mp":1450964370094}\n';

  connection.write(firstChunk);

  const timer = setTimeout(() => {
    connection.write(secondChunk);
    connection.end();
  }, 1000);

  connection.on('end', () => {
    clearTimeout(timer);
    console.log('Subscriber disconnected');
  });
});

server.listen(60300, () => {
  console.log('Test server listening on port 603000');
})
