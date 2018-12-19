import axios from 'axios'
import { Notify } from 'quasar'

export function getOrder (context, params) {
  axios({
    method: 'get',
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.moduleLanguage.language + '/order/' + params.id + '/' + params.email
  })
    .then(response => {
      context.commit('setOrderInfosAndContent', response.data)
    })
    .catch(err => {
      Notify.create({
        message: err.response.data.message,
        color: 'negative',
        textColor: 'black',
        icon: 'warning',
        position: 'top'
      })
    })
}

export function clearOrder (context) {
  context.commit('clearOrder')
}
