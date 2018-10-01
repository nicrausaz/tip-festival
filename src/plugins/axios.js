import axios from 'axios'

export default ({ Vue, store }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: 'https://festival-back.robinsons.ch/api/' + store.state.language
  })
}
