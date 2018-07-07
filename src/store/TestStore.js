import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import * as firebase from 'firebase'

Vue.use(Vuex)
Vue.use(router)

export default {
  state: {
    tests: []
  },
  mutations: {
    setTests (state, payload) {
      state.tests = payload
    }
  },
  actions: {
    getTests ({commit, dispatch}) {
      firebase.database().ref('/tests/').once('value', (data) => {
        console.log(data.val())
        commit('setTests', data.val())
      })
    }
  },
  getters: {
    tests (state) {
      return state.tests
    }
  }
}