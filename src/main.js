import Vue from 'vue'
import App from './App.vue'
import router from './router/routers'
import VueScrollTo from 'vue-scrollto'
import AOS from "aos"
import './libs/buefy'

Vue.config.productionTip = false
Vue.use(VueScrollTo)

AOS.init({
  easing: 'ease-out-back',
  duration: 1000,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
