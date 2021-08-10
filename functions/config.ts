import * as fs from 'fs';
import * as functions from 'firebase-functions';
import * as path from 'path';

interface Config {
  paypal: {
    client_id: string;
    client_secret: string;
    access_token: string;
  };
}

let config: Config = functions.config().env;

if (process.env.NODE_ENV !== 'production')
  if (fs.existsSync(path.resolve(__dirname, '/env.json'))) {
    const env = require(path.resolve(__dirname, '/env.json'));

    config = env;
  }

export default config;
