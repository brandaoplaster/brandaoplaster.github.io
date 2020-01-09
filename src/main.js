import Vue from 'vue'
import App from './App.vue'
import AOS from "aos"
import './libs/buefy'

Vue.config.productionTip = false

AOS.init({
  easing: 'ease-out-back',
  duration: 1000,
});

new Vue({
  render: h => h(App),
}).$mount('#app')
