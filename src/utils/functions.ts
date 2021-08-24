export const showAmount = (price: number, currency = "USD"): string => {
  return price.toLocaleString(undefined, {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
};
