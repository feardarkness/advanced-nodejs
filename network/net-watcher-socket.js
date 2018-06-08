'use strict'

const fs = require('fs');
const net = require('net');

const filename = process.argv[2];

if (!filename) {
  throw Error('Filename must be provided');
}

net.createServer((connection) => {
  console.log('subscriber connected');
  connection.write(`Now watching ${filename} for changes...\n`);

  const watcher = fs.watch(filename, () => connection.write(`File ${filename} changed\n`));

  connection.on('close', () => {
    console.log('Subscriber disconnected');
    watcher.close();
  });
}).listen('/tmp/watcher.sock', () => console.log('Server ready, waiting for subscribers'));
