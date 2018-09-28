export function setShopItems (state, items) {
  state.shop_items = items
}

export function incrementItemQuantity (state, params) {
  // TODO: check size + id
  state.shopbag_items[params.id].quantity += 1
}

export function addItemToBasket (state, item) {
  state.shopbag_items.push(item)
}

export function removeItemFromBasket (state, itemId) {
  state.shopbag_items.filter(x => x.id !== itemId)
}

export function clearBasket (state) {
  state.shopbag_items = []
}
