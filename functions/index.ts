import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import {createApp} from './src/app';

admin.initializeApp();

const app = createApp();

export const payment = functions.https.onRequest(app);
