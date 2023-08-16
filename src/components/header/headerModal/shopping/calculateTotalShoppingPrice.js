export default function calculateTotalShoppingPrice(cart) {
  let price = 0;
  cart.forEach((product) => {
    price += product.price;
  });
  return price;
}
