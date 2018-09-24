export function setShopItems (state, items) {
  state.shop_items = items
}

export function addItemToBasket (state, item) {
  state.shopbag_items.push(item)
}

export function clearBasket (state) {
  state.shopbag_items = []
}
