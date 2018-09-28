export function getItemsNumber (state) {
  return state.shopbag_items.lenght
}

export function getTotalPrice (state) {
  return state.shopbag_items.lenght > 0 ? state.shopbag_items.reduce((x, y) => x.price + y.price) : 0
}

export function hasBasketProducts (state) {
  return state.shopbag_items.length > 0
}
