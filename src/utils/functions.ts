type DecoPriceType = {
  price: number;
  currency?: string | null;
  style?: string | null;
  currencyDisplay?: string | null;
}

export const decoPrice = ({
  price,
  currency="USD",
  style="currency",
  currencyDisplay="symbol",
}: DecoPriceType): string => {
  return price.toLocaleString(undefined, {
    style: style || undefined,
    currency: currency || undefined,
    currencyDisplay: currencyDisplay || undefined,
  });
};
