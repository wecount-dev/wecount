import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import {createOrder, refundOrder} from './paypal/index';

import {captureOrder} from './paypal/captureOrder';

admin.initializeApp();

export const createPaypalOrder = functions.https.onRequest((req, res) => {
  createOrder()
    .then((response) => res.send(`Response: ${JSON.stringify(response)}`))
    .catch((err) => res.send(`Error: ${JSON.stringify(err)}`));
});

export const capturePaypalOrder = functions.https.onRequest((req, res) => {
  // Pass an orderId from createOrder result
  captureOrder(req.body.orderId)
    .then((result) => res.send(`Response: ${JSON.stringify(result)}`))
    .catch((err) => res.send(`Error: ${JSON.stringify(err)}`));
});

export const refundPaypalOrder = functions.https.onRequest((req, res) => {
  // Pass an captureId from captureOrder
  refundOrder(req.body.captureId)
    .then((result) => res.send(`Response: ${JSON.stringify(result)}`))
    .catch((err) => res.send(`Error: ${JSON.stringify(err)}`));
});
