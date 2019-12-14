import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import People from './components/pages/People.vue';
import FeedbackList from './components/FeedbackList.vue';
import Rave from './components/pages/Rave.vue';
import Rant from './components/pages/Rant.vue';
import store from './store'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'people', component: People },
  { path: '/rants', name: 'rants', component: FeedbackList, props: { type: 'rant' } },
  { path: '/raves', name: 'raves', component: FeedbackList, props: { type: 'rave' } },
  { path: '/raves/:id', name: 'rave', component: Rave, props: true },
  { path: '/rants/:id', name: 'rant', component: Rant, props: true }
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
