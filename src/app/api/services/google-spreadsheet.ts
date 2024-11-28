import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const env = {
  GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || 'key_test',
  GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY || 'key_test',
  GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID || 'key_test',
}
const fixedPrivateKey = env.GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join('\n');

const serviceAccountAuth = new JWT({
  email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: fixedPrivateKey,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export const doc = new GoogleSpreadsheet(env.GOOGLE_SHEET_ID, serviceAccountAuth);
