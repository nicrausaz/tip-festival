export function getItemsNumber (state) {
  return state.shopbag_items.lenght
}

export function getTotalPrice (state) {
  let total = 0
  state.shopbag_items.forEach(item => {
    total += item.price * item.quantity
  })
  return total
}

export function hasBasketProducts (state) {
  return state.shopbag_items.length > 0
}
