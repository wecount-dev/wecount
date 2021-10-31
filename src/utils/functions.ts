export const decoPrice = (
  price: number,
  currency="USD",
  style="currency",
  currencyDisplay="symbol",
): string => {
  return price.toLocaleString(undefined, {
    style: style || undefined,
    currency: currency || undefined,
    currencyDisplay: currencyDisplay || undefined,
  });
};
