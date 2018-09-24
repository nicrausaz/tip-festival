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
    name: 'Parapluie',
    description: 'Cool parapluie',
    price: 10,
    size: params.selectedSize
  }

  console.log(item)
  // TODO: check if item is arleady in shopbag

  context.commit('addItemToBasket', item)
}

export function clearBasket (context) {
  context.commit('clearBasket')
}
