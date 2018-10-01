import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import moduleShop from './module-shop'
import moduleSizeModal from './module-sizemodal'

Vue.use(Vuex)

Vue.config.productionTip = false

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
      language: 'fr'
    },
    modules: {
      moduleShop,
      moduleSizeModal
    }
  })
  return Store
}
