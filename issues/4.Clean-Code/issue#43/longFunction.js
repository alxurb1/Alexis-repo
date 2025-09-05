function calculatePrice(buy) {
  let total = 0;
  for (let i = 0; i < buy.length; i++) {
    const item = buy[i];
    let price = item.basePrice;
    if (item.hasDiscount) {
      price = price * (1 - item.discountRate);
    }
    if (item.isTaxable) {
      price = price * (1 + TAX_PERCENT);
    }
    total += price;
  }
  return total;
}
