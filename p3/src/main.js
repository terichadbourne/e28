import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import People from './components/pages/People.vue';
import Rants from './components/pages/Rants.vue';
import Raves from './components/pages/Raves.vue';
import Rave from './components/pages/Rave.vue';
import Rant from './components/pages/Rant.vue';

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'people', component: People },
  { path: '/rants', name: 'rants', component: Rants},
  { path: '/raves', name: 'raves', component: Raves},
  { path: '/raves/:id', name: 'rave', component: Rave, props: true },
  { path: '/rants/:id', name: 'rant', component: Rant, props: true }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
