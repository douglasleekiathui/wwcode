// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import '@fortawesome/fontawesome-free/css/all.css'

import store from './store'

import firebase from 'firebase'

Vue.use(Vuetify, {
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'fa'
})

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyAljy2qyXNmoqP-Qusr-4xO8hjBEAUnh28",
    authDomain: "wwcode-2018.firebaseapp.com",
    databaseURL: "https://wwcode-2018.firebaseio.com",
    projectId: "wwcode-2018",
    storageBucket: "wwcode-2018.appspot.com",
    messagingSenderId: "217074971619"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
