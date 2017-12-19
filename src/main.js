import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import VueTextareaAutosize from 'vue-textarea-autosize'
import routes from './routes'

import { store } from './store/store'

Vue.use(VueRouter)
Vue.use(VueTextareaAutosize)

const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/Portal/termo-referencia/'
})

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
