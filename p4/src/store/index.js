import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as app from './../app.js';

export default new Vuex.Store({
    state: {
        favoritesIndex: {
            "favoriteRants": [],
            "favoriteRaves": []
        },
        people: []
    },
    mutations: {
        setFavoritesIndex(state, payload) {
            state.favoritesIndex = payload;
        },
        setPeople(state, payload) {
            state.people = payload;
        }
    },
    actions: {
        setPeople(context) {
            app.axios.get(app.config.api + 'people.json').then(response => {
                context.commit('setPeople', response.data.slice(1));
            });
        }
    },
    getters: {
        getPersonById(state) {
            return function (id) {
                return state.people.find(person => person.id == id)
            }
        }
    }
})