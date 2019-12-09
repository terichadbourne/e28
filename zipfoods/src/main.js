import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ProductsPage from './components/pages/ProductsPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import HomePage from './components/pages/HomePage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import CartPage from './components/pages/CartPage.vue';
import ProductCreatePage from './components/pages/ProductCreatePage.vue';
import store from './store'

/* eslint-disable no-unused-vars */
const _ = require('lodash');
/* eslint-enable no-unused-vars */

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/products', name: 'products', component: ProductsPage },
  { path: '/product/create', name: 'create', component: ProductCreatePage },
  { path: '/product/:slug', name: 'product', component: ProductPage, props: true },
  { path: '/categories', name: 'categories', component: CategoriesPage },
  { path: '/cart', name: 'cart', component: CartPage }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
