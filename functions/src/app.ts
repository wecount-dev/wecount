import * as Paypal from './paypal';

import express, {Express} from 'express';

import cors from 'cors';

export const createApp = (): Express => {
  const app = express();
  app.use(cors({origin: true}));

  app.get('/', (_, res) => {
    res.send('It works');
  });

  app.get('/paypal-create-order', (_, res) => {
    Paypal.createOrder()
      .then((response) => res.send(`Response: ${JSON.stringify(response)}`))
      .catch((err) => res.send(`Error: ${JSON.stringify(err)}`));
  });

  app.post('/paypal-capture-order', (req, res) => {
    // Pass an orderId from createOrder result
    Paypal.captureOrder(req.body.orderId)
      .then((result) => res.send(`Response: ${JSON.stringify(result)}`))
      .catch((err) => res.send(`Error: ${JSON.stringify(err)}`));
  });

  app.post('/paypal-refund-order', (req, res) => {
    // Pass a captureId from captureOrder
    Paypal.refundOrder(req.body.captureId)
      .then((result) => res.send(`Response: ${JSON.stringify(result)}`))
      .catch((err) => res.send(`Error: ${JSON.stringify(err)}`));
  });

  return app;
};
