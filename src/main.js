import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { ObserveVisibility } from 'vue-observe-visibility'

Vue.directive('observe-visibility', ObserveVisibility)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
