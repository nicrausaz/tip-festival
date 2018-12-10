import axios from 'axios'

export function openModal (context, params) {
  context.commit('setModalOpen', params.open)
  context.commit('setItemId', params.id)
  axios({
    method: 'get',
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.moduleLanguage.language + '/article/' + params.id
  })
    .then(response => {
      context.commit('setItemSizes', response.data.size)
    })
    .catch(err => {
      console.log(err)
    })
}

export function closeModal (context, params) {
  context.commit('setModalOpen', params.open)
  context.commit('setItemId', params.id)
  context.commit('setItemSizes', null)
}
