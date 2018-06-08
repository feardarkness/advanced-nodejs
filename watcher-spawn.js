'use strict';
const fs = require('fs');
const { spawn } = require('child_process');

const filename = process.argv[2];

if (!filename) {
  throw Error('You must provide a filename');
}

fs.watch(filename, () => {
  const ls = spawn('ls', ['-l', '-h', filename]);
  ls.stdout.pipe(process.stdout);
});

console.log(`Watching ${filename}`);
