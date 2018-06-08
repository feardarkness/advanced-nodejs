'use strict'

const fs = require('fs');
const net = require('net');

const filename = process.argv[2];

if (!filename) {
  throw Error('Filename must be provided');
}

net.createServer((connection) => {
  console.log('subscriber connected');
  connection.write(JSON.stringify({ type: 'watching', file: filename }) + '\n');

  const watcher = fs.watch(filename, () => connection.write(JSON.stringify({ type: 'changed', timestamp: Date.now() }) + '\n'));

  connection.on('close', () => {
    console.log('Subscriber disconnected');
    watcher.close();
  });
}).listen('/tmp/watcher.sock', () => console.log('Waiting for client connections\n'));
