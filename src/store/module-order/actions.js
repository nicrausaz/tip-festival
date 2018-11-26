import axios from 'axios'

export function getOrder (context, params) {
  axios({
    method: 'get',
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.moduleLanguage.language + '/order/' + params.id + '/' + params.email
  })
    .then(response => {
      context.commit('setOrderInfosAndContent', response.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export function clearOrder (context) {
  context.commit('clearOrder')
}
