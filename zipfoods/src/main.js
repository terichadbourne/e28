import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ShowProducts from './components/ShowProducts.vue';
import ShowHome from './components/ShowHome.vue';
import ShowCategories from './components/ShowCategories.vue';

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: ShowHome },
  { path: '/products', component: ShowProducts },
  { path: '/categories', component: ShowCategories }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
