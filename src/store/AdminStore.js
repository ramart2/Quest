import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import * as firebase from 'firebase'

Vue.use(Vuex)
Vue.use(router)

export default {
  state: {

  },
  mutations: {
    setStudents (state, payload) {

    }
  },
  actions: {
    addStudent ({commit, dispatch}, payload) {
      firebase.database().ref('students').push({
        firstName: payload.firstName,
        lastName: payload.lastName,
        grade: payload.grade,
        teacher: payload.teacher
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addTest ({commit, dispatch}, payload) {
      firebase.database().ref('tests').push({
        id: payload.id,
        title: payload.title,
        author: payload.author,
        category: payload.category
      })
        .then((response) => {
          console.log(response)
          dispatch('getTests')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  getters: {

  }
}