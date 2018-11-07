import axios from 'axios'

export function getShopItems (context) {
  axios({
    method: 'get',
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.language + '/articles'
  })
    .then(response => {
      let products = []
      response.data.forEach(category => {
        category.articles.forEach(item => {
          products.push(item)
        })
      })
      context.commit('setShopItems', products)
    })
    .catch(err => {
      console.log(err)
    })
}

export function addItemToBasket (context, params) {
  axios({
    method: 'get',
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.language + '/article/' + params.id
  })
    .then(response => {
      let item = response.data
      item.size = params.selectedSize
      item.quantity = 1
      context.commit('addItemToBasket', item)
    })
    .catch(err => {
      console.log(err)
    })
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
