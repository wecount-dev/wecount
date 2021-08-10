import * as Paypal from '@paypal/checkout-server-sdk';

import config from '../../config';

/**
 * Setting up and Returns PayPal SDK environment with PayPal Access credentials.
 * For demo purpose, we are using SandboxEnvironment. In production this will be
 * LiveEnvironment.
 */
const environment = new Paypal.core.SandboxEnvironment(
  config.paypal.client_id,
  config.paypal.client_secret,
);

/**
 * Returns PayPal HTTP client instance with environment which has access
 * credentials context. This can be used invoke PayPal API's provided the
 * credentials have the access to do so.
 */
export const client = new Paypal.core.PayPalHttpClient(environment);
