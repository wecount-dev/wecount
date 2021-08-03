import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import {createOrder} from './paypal/index';

admin.initializeApp();

export const createPaypalOrder = functions.https.onRequest((req, res) => {
  functions.logger.info('Hello logs!', {structuredData: true});

  createOrder()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
