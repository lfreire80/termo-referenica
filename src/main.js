import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import VueTextareaAutosize from 'vue-textarea-autosize'
import routes from './routes'


Vue.use(VueRouter)
Vue.use(VueTextareaAutosize)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
