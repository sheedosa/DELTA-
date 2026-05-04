import fs from 'fs';
import path from 'path';

async function downloadFile() {
  const url = 'https://drive.google.com/uc?export=download&id=1bbJINa3-02CEfVaHMQvQ987O-lWtoktF';
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  fs.mkdirSync('public', { recursive: true });
  fs.writeFileSync('public/logo.png', Buffer.from(buffer));
  console.log('Downloaded file size:', buffer.byteLength);
}

downloadFile().catch(console.error);
