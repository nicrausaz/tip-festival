export function setShopItems (state, items) {
  state.shop_items = items
}

export function incrementItemQuantity (state, params) {
  state.shopbag_items[params.id].quantity += 1
}

export function addItemToBasket (state, item) {
  state.shopbag_items.push(item)
}

export function removeItemFromBasket (state, params) {
  state.shopbag_items = state.shopbag_items.filter(item => item.id !== params.id && item.size !== params.size)
}

export function clearBasket (state) {
  state.shopbag_items = []
}
