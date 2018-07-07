import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCbLrUbgcaxPqSS3qld0T3J3P7SNeh_9jg",
      authDomain: "quest-e9b64.firebaseapp.com",
      databaseURL: "https://quest-e9b64.firebaseio.com",
      projectId: "quest-e9b64",
      storageBucket: "quest-e9b64.appspot.com",
      messagingSenderId: "669148979297"
    };
    firebase.initializeApp(config);
    this.$store.dispatch('getTests')
  }
})
