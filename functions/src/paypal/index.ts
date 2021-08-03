import * as Paypal from '@paypal/checkout-server-sdk';

import config from '../../config';

// This sample uses SandboxEnvironment. In production, use LiveEnvironment
const environment = new Paypal.core.SandboxEnvironment(
  config.paypal.client_id,
  config.paypal.client_secret,
);
const client = new Paypal.core.PayPalHttpClient(environment);

// Here, OrdersCreateRequest() creates a POST request to /v2/checkout/orders
const paymentRequest = new Paypal.orders.OrdersCreateRequest().requestBody({
  intent: 'CAPTURE',
  purchase_units: [
    {
      amount: {
        currency_code: 'USD',
        value: '100.00',
      },
    },
  ],
});

export const createOrder = async (): Promise<void> => {
  const res = await client.execute(paymentRequest);
  console.log(`Response: ${JSON.stringify(res)}`);
};
