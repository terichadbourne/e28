import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favorites: {
            "favoriteRants": [],
            "favoriteRaves": []
        }
    },
    mutations: {
        setFavorites(state, payload) {
            state.favorites = payload;
            console.log('just ran setFavorites mutation in store/index.js')
        }
        // ,
        // updateFavorites(state, payload) {
        //     state.favorites += payload;
        // }
    }
})