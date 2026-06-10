const fs = require('fs');
const path = require('path');

const cfg = {
  appId: process.env.APP_ID || 'com.webtoapp.placeholder',
  appName: process.env.APP_NAME || 'WebToApp',
  siteUrl: process.env.SITE_URL || 'https://example.com',
  orientation: process.env.ORIENTATION || 'portrait',
  fullscreen: process.env.FULLSCREEN === 'true',
  tvSupport: process.env.TV_SUPPORT === 'true',
};

// capacitor.config.json
const cap = {
  appId: cfg.appId,
  appName: cfg.appName,
  webDir: 'www',
  server: { url: cfg.siteUrl, cleartext: true, androidScheme: 'https' },
  android: { allowMixedContent: true }
};
fs.writeFileSync('capacitor.config.json', JSON.stringify(cap, null, 2));

// www/index.html (redirect fallback)
fs.mkdirSync('www', { recursive: true });
fs.writeFileSync('www/index.html',
  `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=${cfg.siteUrl}"></head><body></body></html>`);

console.log('✅ Configured:', cfg);
