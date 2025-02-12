import { Profit } from "./Profit";

export const TotalProfit = (items) => {
  let total = 0;

  items.forEach((item) => {
    const profit = Profit(item.price, item.purchasePrice);
    total += parseFloat(profit);
  });

  return total.toFixed(2);
};
