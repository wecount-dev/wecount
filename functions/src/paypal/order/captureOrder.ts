import * as Paypal from '@paypal/checkout-server-sdk';

import {client as paypalClient} from './client';

export const captureOrder = (
  orderId: string,
  requestBody: Record<string, any> | null = null,
): Promise<Record<string, any>> => {
  const request = new Paypal.orders.OrdersCaptureRequest(orderId);
  request.requestBody(requestBody ?? {});

  return paypalClient.execute(request);
};
