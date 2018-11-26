import axios from 'axios'

export function getTranslations (context) {
  axios({
    method: 'get',
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.moduleLanguage.language + '/lang/interface'
  })
    .then(response => {
      context.commit('setTranslations', response.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export function getAvailableLanguages (context) {
  axios({
    method: 'get',
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.moduleLanguage.language + '/lang/available'
  })
    .then(response => {
      context.commit('setAvailableLanguages', response.data.lang)
    })
    .catch(err => {
      console.log(err)
    })
}

export function getInfosTexts (context) {
  axios({
    method: 'get',
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.moduleLanguage.language + '/lang/info'
  })
    .then(response => {
      context.commit('setInfosText', response.data)
    })
    .catch(err => {
      console.log(err)
    })
}
