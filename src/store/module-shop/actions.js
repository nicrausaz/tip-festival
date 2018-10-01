export function getShopItems (context) {
  // replace this by axios response
  let items = [
    {
      id: 1,
      name: 'Tshirt',
      description: 'Cool tshirt',
      price: 20
    },
    {
      id: 2,
      name: 'Pull',
      description: 'Cool pull',
      price: 40
    },
    {
      id: 3,
      name: 'Parapluie',
      description: 'Cool parapluie',
      price: 10
    }
  ]
  // axios request then:
  context.commit('setShopItems', items)
}

export function addItemToBasket (context, params) {
  // axios: get item from id
  let item = {
    id: params.id,
    name: 'Item id ' + params.id,
    description: 'Cool ' + params.id,
    price: 10,
    quantity: 1,
    size: params.selectedSize
  }
  context.commit('addItemToBasket', item)
}

export function incrementItemQuantityInBasket (context, params) {
  context.commit('incrementItemQuantity', params)
}

export function removeItemFromBasket (context, params) {
  context.commit('removeItemFromBasket', params)
}

export function clearBasket (context) {
  context.commit('clearBasket')
}
