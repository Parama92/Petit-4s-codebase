import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Menu from '@/components/Menu'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import News from '@/components/News'
import Customize from '@/components/Customize'
import PageNotFound from '@/components/PageNotFound'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

const routes = [
  {path: '/', component: Home},
  {path: '/menu', component: Menu},
  {path: '/about', component: About},
  {path: '/contact', component: Contact},
  {path: '/faq', component: FAQ},
  {path: '/news', component: News},
  {path: '/customize', component: Customize},
  {path: '/*', component: PageNotFound}
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
