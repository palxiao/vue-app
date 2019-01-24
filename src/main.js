import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

Vue.config.productionTip = false

FastClick.attach(document.body)

const isApp = 0

if (isApp) {
  window.apiready = function () {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
} else {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}