import fs from 'fs';
const magic = fs.readFileSync('public/logo.png', { length: 4 });
console.log('Magic bytes:', magic.toString('hex'));
