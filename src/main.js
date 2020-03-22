import Vue from 'vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store/index'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import localizeFilter from './filters/localize.filter'
import tooltipDirective from './directives/tooltip.derective'
import messagePlugin from './utils/message.plagin'
import titlePlugin from './utils/title.plugin'
import Loader from './components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip',tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: 'AIzaSyAGcEsB9qVtEcGqOkuDMoIsJN5yPsrL3QA',
  authDomain: 'vuejs-crm-app.firebaseapp.com',
  databaseURL: 'https://vuejs-crm-app.firebaseio.com',
  projectId: 'vuejs-crm-app',
  storageBucket: 'vuejs-crm-app.appspot.com',
  messagingSenderId: '651463806488',
  appId: '1:651463806488:web:d5db2d2717ae4233f6bd6d',
  measurementId: 'G-6L0FH4DN50'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

})



