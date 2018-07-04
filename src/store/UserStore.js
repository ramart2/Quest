import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import * as firebase from 'firebase'

Vue.use(Vuex)
Vue.use(router)

export default {
  state: {
    user: ''
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    getUser ({commit}) {

    },
    register ({commit, dispatch}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          console.log(response)
          const user = firebase.auth().currentUser
          commit('setUser', user)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    login ({commit, dispatch}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          const user = firebase.auth().currentUser
          const loggedInUser = {
            id: user.uid
          }
          commit('setUser', loggedInUser)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    logout ({commit, dispatch}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}