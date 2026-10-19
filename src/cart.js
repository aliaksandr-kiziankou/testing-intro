function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

let discount = 0;

function addToCart(cart, product, quantity) {
  if (quantity === 0) {
    throw new RangeError('Количество не может быть нулевым');
  }

  const item = cart.find(item => item.id === product.id);
  const newQuantity = (item ? item.quantity : 0) + quantity;

  if (newQuantity > product.stock) {
    throw new RangeError('Не хватает на складе');
  }

  if (item) {
    return cart.map(item =>
      item.id === product.id
        ? {...item, quantity: newQuantity}
        : item
    );
  }

  return [...cart, {...product, quantity}];
}

function changeQuantity() { return notImplemented(); }

function removeFromCart() { return notImplemented(); }

function calculateCartSubtotal() { return notImplemented(); }

function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
