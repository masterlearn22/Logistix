const fs = require('fs');
const path = require('path');
const https = require('https');

const partners = [
  { name: 'Pelindo', domain: 'pelindo.co.id' },
  { name: 'Garuda Indonesia', domain: 'garuda-indonesia.com' },
  { name: 'JNE', domain: 'jne.co.id' },
  { name: 'J&T Express', domain: 'jet.co.id' },
  { name: 'SiCepat', domain: 'sicepat.com' },
  { name: 'Pos Indonesia', domain: 'posindonesia.co.id' },
  { name: 'Tokopedia', domain: 'tokopedia.com' },
  { name: 'Shopee', domain: 'shopee.co.id' },
  { name: 'Gojek', domain: 'gojek.com' },
  { name: 'Grab', domain: 'grab.com' },
  { name: 'Blibli', domain: 'blibli.com' },
  { name: 'Bank Mandiri', domain: 'bankmandiri.co.id' },
  { name: 'BCA', domain: 'bca.co.id' },
  { name: 'BNI', domain: 'bni.co.id' },
  { name: 'BRI', domain: 'bri.co.id' },
  { name: 'Telkom Indonesia', domain: 'telkom.co.id' },
  { name: 'Astra International', domain: 'astra.co.id' },
  { name: 'Pertamina', domain: 'pertamina.com' },
  { name: 'Pelni', domain: 'pelni.co.id' },
  { name: 'KAI', domain: 'kai.id' },
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        download(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed with status: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

(async () => {
  for (const company of partners) {
    const dest = path.join(dir, `${company.name.replace(/\s+/g, '_').toLowerCase()}.png`);
    const url = `https://logo.uplead.com/${company.domain}`;
    try {
      await download(url, dest);
      console.log(`Downloaded: ${company.name}`);
    } catch (e) {
      console.error(`Failed to download ${company.name}: ${e.message}`);
      // Fallback to high-res favicon
      try {
        await download(`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${company.domain}&size=256`, dest);
        console.log(`Downloaded fallback for: ${company.name}`);
      } catch (err) {
        console.error(`Fallback failed for ${company.name}`);
      }
    }
  }
})();
