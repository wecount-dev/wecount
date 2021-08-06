import * as Paypal from '@paypal/checkout-server-sdk';

import {client as paypalClient} from './client';

export const refundOrder = async (
  captureId: string,
  requestBody: Record<string, any> | null = null,
): Promise<Record<string, any>> => {
  const request = new Paypal.payments.CapturesRefundRequest(captureId);

  request.resquestBody(
    requestBody ?? {
      amount: {
        value: '20.00',
        currency_code: 'USD',
      },
    },
  );

  return paypalClient.execute(request);
};
