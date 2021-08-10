import * as Paypal from '@paypal/checkout-server-sdk';

import config from '../../config';
import {client as paypalClient} from './client';

// api doc : https://developer.paypal.com/docs/api/orders/v2/#orders_create

const requestBodySample = {
  intent: 'CAPTURE',
  purchase_units: [
    {
      amount: {
        currency_code: 'USD',
        value: '0.1',
      },
    },
  ],
};

export const createOrder = (
  requestBody: Record<string, any> | null = null,
): Promise<Record<string, any>> => {
  const request = new Paypal.orders.OrdersCreateRequest();
  request.headers.Prefer = 'return=representation';
  request.headers.Authorization = `Basic ${config.paypal.client_id}:${config.paypal.client_secret}`;
  request['Content-type'] = 'application/json';

  request.requestBody(requestBody ?? requestBodySample);

  return paypalClient.execute(request);
};
