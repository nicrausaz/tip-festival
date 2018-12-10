import axios from 'axios'

export function getShopItems (context) {
  axios({
    method: 'get',
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.moduleLanguage.language + '/articles'
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
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.moduleLanguage.language + '/article/' + params.id
  })
    .then(response => {
      let item = response.data
      item.size = params.size
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

export function confirmOrder (context) {
  axios({
    method: 'get',
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.moduleLanguage.language + '/order/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {}
    // {
    //   "name":"Brugger",
    //   "fsname":"Mathias",
    //   "address":"Av. de l'Ile-Heureuse 12",
    //   "npa":1800,
    //   "city":"Vevey",
    //   "email":"brugger.mathias@hotmail.com",
    //   "articles":[
    //     {"article_id":5,"size_id":3},
    //     {"article_id":7,"size_id":6}]
    // }
  })
    .then(response => {
    })
    .catch(err => {
      console.log(err)
    })
}
