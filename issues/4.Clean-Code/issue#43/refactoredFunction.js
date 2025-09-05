function getItemPrice(item) {
  let price = item.basePrice;
  if (item.hasDiscount) {
    price *= (1 - item.discountRate);
  }
  if (item.isTaxable) {
    price *= (1 + TAX_PERCENT);
  }
  return price;
}

function calculateTotalPrice(buy) {
  return buy.reduce((total, item) => total + getItemPrice(item), 0);
}
