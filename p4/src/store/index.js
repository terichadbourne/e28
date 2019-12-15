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
        }
        // ,
        // updateFavorites(state, payload) {
        //     state.favorites += payload;
        // }
    }
})