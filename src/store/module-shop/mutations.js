export function setShopItems (state, items) {
  state.shop_items = items
}

export function decrementItemQuantity (state, params) {
  state.shopbag_items.find(x => x.id === params.id && x.size === params.size).quantity -= 1
}

export function incrementItemQuantity (state, params) {
  state.shopbag_items.find(x => x.id === params.id && x.size === params.size).quantity += 1
}

export function addItemToBasket (state, item) {
  state.shopbag_items.push(item)
}

export function removeItemFromBasket (state, params) {
  state.shopbag_items.forEach((item, index) => {
    if (item.id === params.id && item.size === params.size) {
      state.shopbag_items.splice(index, 1)
    }
  })
}

export function clearBasket (state) {
  state.shopbag_items = []
}
