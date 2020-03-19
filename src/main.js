import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store/index'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plagin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)


firebase.initializeApp({
  apiKey: "AIzaSyAGcEsB9qVtEcGqOkuDMoIsJN5yPsrL3QA",
  authDomain: "vuejs-crm-app.firebaseapp.com",
  databaseURL: "https://vuejs-crm-app.firebaseio.com",
  projectId: "vuejs-crm-app",
  storageBucket: "vuejs-crm-app.appspot.com",
  messagingSenderId: "651463806488",
  appId: "1:651463806488:web:d5db2d2717ae4233f6bd6d",
  measurementId: "G-6L0FH4DN50"
})

let app

firebase.auth().onAuthStateChanged(()=> {
  if (!app) {
    app  = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

})



