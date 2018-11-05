import axios from 'axios'

export function getTranslations (context) {
  axios({
    method: 'get',
    url: 'https://festival-back.robinsons.ch/api/' + context.rootState.language + '/lang/interface'
  })
    .then(response => {
      // call this
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
}
