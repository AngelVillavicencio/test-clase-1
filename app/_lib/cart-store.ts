import { type Product } from "./product";

type CartStore = {
  items: Product[];
};

const globalCart = globalThis as typeof globalThis & {
  __frontofficeCart?: CartStore;
};

function getStore() {
  if (!globalCart.__frontofficeCart) {
    globalCart.__frontofficeCart = { items: [] };
  }

  return globalCart.__frontofficeCart;
}

export function getCartItems() {
  return getStore().items;
}

export function addCartItem(product: Product) {
  const store = getStore();
  store.items = [...store.items, product];
  return store.items;
}

export function removeCartItem(index: number) {
  const store = getStore();
  store.items = store.items.filter((_, itemIndex) => itemIndex !== index);
  return store.items;
}

export function clearCartItems() {
  const store = getStore();
  store.items = [];
  return store.items;
}
