import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import People from './components/pages/People.vue';
import FeedbackList from './components/pages/FeedbackList.vue';
import Feedback from './components/pages/Feedback.vue';

import store from './store'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'people', component: People },
  { path: '/rants', name: 'rants', component: FeedbackList, props: { type: 'rant' } },
  { path: '/raves', name: 'raves', component: FeedbackList, props: { type: 'rave' } },
  { path: '/raves/:id', name: 'rave', component: Feedback, props: (route) => ({ id: route.params.id, type: 'rave' })},
  { path: '/rants/:id', name: 'rant', component: Feedback, props: (route) => ({ id: route.params.id, type: 'rant' })}
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
