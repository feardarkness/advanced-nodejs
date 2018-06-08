'use strict';

const client = require('net').connect({ port: 60300 });
const ldjClient = require('./lib/ldj-client').connect(client);

ldjClient.on('message', data => {
  const message = data;

  if (message.type === 'watching') {
    console.log(`Now watching ${message.file}`);
  } else if (message.type === 'changed') {
    console.log(`File changed on ${new Date(message.timestamp)}`);
  } else {
    console.log(`Unrecognized message ${message.type}`)
  }
});