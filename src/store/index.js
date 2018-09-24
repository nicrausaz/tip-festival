import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import moduleShop from './module-shop'
import moduleSizeModal from './module-sizemodal'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
      moduleShop,
      moduleSizeModal
    }
  })
  return Store
}
