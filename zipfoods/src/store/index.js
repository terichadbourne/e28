import Vue from 'vue'
import Vuex from 'vuex'
import * as app from './../app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartCount: 0,
        products: []
    },
    mutations: {
        setCartCount(state, payload) {
            state.cartCount = payload;
        },
        updateCartCount(state, payload) {
            state.cartCount += payload;
        },
        setProducts(state, payload) {
          state.products = payload;
        }
    },
    actions: {
      setProducts(context) {
        app.axios.get(app.config.api + 'products').then(response => {
            context.commit('setProducts', response.data);
        });
      }
    },
    getters: {
      getProductById(state) {
        return function (id) {
          return state.products.find(product => product.id == id)
        }
      }
    }

})
