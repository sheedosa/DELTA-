import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = [
  {
    id: '1bbJINa3-02CEfVaHMQvQ987O-lWtoktF',
    dest: 'src/assets/logo.png'
  },
  {
    id: '1PlxrOgjcka1rwKpGmo4JqcBdYdT6HG1h',
    dest: 'public/social-share.png'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  const assetsDir = path.join(process.cwd(), 'src', 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  for (const asset of assets) {
    const url = `https://drive.usercontent.google.com/download?id=${asset.id}&export=download`;
    if (!fs.existsSync(asset.dest)) {
      console.log(`Downloading ${asset.dest}...`);
      await download(url, asset.dest);
    }
  }
}

run().catch(console.error);
