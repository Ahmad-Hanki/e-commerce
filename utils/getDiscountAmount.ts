const getDiscountAmount = (oldPrice: number | null, newPrice: number): number | null => {
  if (!oldPrice || oldPrice <= 0) return null; // Return null if no old price or it's zero
  const discount = ((oldPrice - newPrice) / oldPrice) * 100; // Calculate discount percentage
  return parseFloat(discount.toFixed(2)); // Return discount rounded to 2 decimal places
};

export default getDiscountAmount;
