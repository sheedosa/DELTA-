import fs from 'fs';
import path from 'path';
import https from 'https';

const images = {
  'hero-bg.png': 'https://lh3.googleusercontent.com/d/1YWvtsl0Z_5ATzPdEiCoaCUESWb04Z0BI',
  'logo.png': 'https://lh3.googleusercontent.com/d/1bbJINa3-02CEfVaHMQvQ987O-lWtoktF',
  'product-hinge-01.png': 'https://lh3.googleusercontent.com/d/1XgNd3DS6VN5lorNmd13Z7Ap047x82YP5',
  'product-lever-04.png': 'https://lh3.googleusercontent.com/d/1JaosJ5VHtas6KUWgSEvIt3lfmDGNGgBH',
  'product-pull-04.png': 'https://lh3.googleusercontent.com/d/1z2MIHPASR4qxmTHdhrSf5N4-C5zcPFOk',
  'product-system-01.png': 'https://lh3.googleusercontent.com/d/1x-0aMJcNN6aZr37jY_6_3gVbOzyVYtRs',
  'product-lever-02.png': 'https://lh3.googleusercontent.com/d/1bGj7NPEaVZ6bVx8z6VeoQXjGQcGl9N4M',
  'product-lever-03.png': 'https://lh3.googleusercontent.com/d/1I2uCgv9JIFOmNjVmNkdVjm8SHtkfSKGv',
  'product-pull-02.png': 'https://lh3.googleusercontent.com/d/1QW6inFpf-kBi-XI2mFFDRa4WKylpKnGq',
  'product-pull-03.png': 'https://lh3.googleusercontent.com/d/1d1VMqIAUdmaZRQy3ct2192st09cTbZJV',
  'product-lever-01.png': 'https://lh3.googleusercontent.com/d/1P9ZlXWlAgunLcrh-o4volo8nq8xWmEnS',
  'product-knob-01.png': 'https://lh3.googleusercontent.com/d/1Jt352x0Yz0S3JJoSCnNsOrv4Jtq1Id66',
  'product-pull-01.png': 'https://lh3.googleusercontent.com/d/1CYzmQjCv9cLE5mmaF35fk1chJIMVI0WF',
  'product-lever-05.png': 'https://lh3.googleusercontent.com/d/1_RHt3p6i50iOj25SFhJNOLI6VBqOVfts',
  'product-classic-01.png': 'https://lh3.googleusercontent.com/d/1Z08L1hrdsPME_2MosvIrso_NMxoZFaLv'
};

const targetDir = path.join(process.cwd(), 'src', 'assets', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 303 || response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function main() {
  for (const [filename, url] of Object.entries(images)) {
    const dest = path.join(targetDir, filename);
    console.log(`Downloading ${filename}...`);
    try {
      await download(url, dest);
      console.log(`Downloaded ${filename}`);
    } catch (e) {
      console.error(`Error downloading ${filename}: ${e.message}`);
    }
  }
}

main();
