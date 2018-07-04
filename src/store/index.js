import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import UserStore from './UserStore'

export const store = new Vuex.Store({
  modules: {
    UserStore: UserStore
  }
})