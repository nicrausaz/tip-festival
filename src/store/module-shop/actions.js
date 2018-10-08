import axios from 'axios'

export function getShopItems (context) {
  axios({
    method: 'get',
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.language + '/articles'
  })
    .then((response) => {
      context.commit('setShopItems', response.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export function addItemToBasket (context, params) {
  // axios: get item from params.id
  // axios({
  //   method: 'get',
  //   url: 'https://festival-back.robinsons.ch/api/' + context.rootState.language + '/article/' + params.id
  // })
  //   .then((response) => {
  //     context.commit('setShopItems', response.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })

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
