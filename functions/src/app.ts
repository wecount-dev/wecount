import * as Paypal from './paypal';

import express, {Express} from 'express';

import cors from 'cors';

export const createApp = (): Express => {
  const app = express();
  app.use(cors({origin: true}));

  app.get('/', (_, res) => {
    res.send('It works');
  });

  app.post('/paypal-get-accessToken', (_, res) => {
    Paypal.getAccessToken()
      .then((response) => res.send(`Response: ${JSON.stringify(response)}`))
      .catch((err) => res.send(`Error: ${JSON.stringify(err)}`));
  });

  app.post('/paypal-generate-link', (req, res) => {
    Paypal.generateLink()
      .then((response) => res.send(`Response: ${JSON.stringify(response)}`))
      .catch((err) => res.send(`Error: ${JSON.stringify(err)}`));
  });

  return app;
};
