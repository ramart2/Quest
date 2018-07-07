import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import UserStore from './UserStore'
import AdminStore from './AdminStore'
import TestStore from './TestStore'

export const store = new Vuex.Store({
  modules: {
    UserStore: UserStore,
    AdminStore: AdminStore,
    TestStore: TestStore
  }
})