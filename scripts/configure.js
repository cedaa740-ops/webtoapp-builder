const fs = require('fs');
const path = require('path');

const {
  APP_ID = 'com.example.app',
  APP_NAME = 'My App',
  SITE_URL = 'https://example.com',
} = process.env;

const config = {
  appId: APP_ID,
  appName: APP_NAME,
  webDir: 'www',
  server: {
    url: SITE_URL,
    cleartext: true,
    androidScheme: 'https',
    allowNavigation: ['*'],
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
};
fs.writeFileSync('capacitor.config.json', JSON.stringify(config, null, 2));

const wwwDir = path.join(process.cwd(), 'www');
fs.mkdirSync(wwwDir, { recursive: true });
fs.writeFileSync(
  path.join(wwwDir, 'index.html'),
  `<!doctype html><meta http-equiv="refresh" content="0; url=${SITE_URL}"><title>${APP_NAME}</title>`
);
console.log('Configured:', { APP_ID, APP_NAME, SITE_URL });
