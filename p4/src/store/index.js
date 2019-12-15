import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favoritesIndex: {
            "favoriteRants": [],
            "favoriteRaves": []
        }
    },
    mutations: {
        setFavoritesIndex(state, payload) {
            state.favoritesIndex = payload;
            console.log('just ran setFavoritesIndex mutation in store/index.js')
        }
        // ,
        // updateFavorites(state, payload) {
        //     state.favorites += payload;
        // }
    }
})