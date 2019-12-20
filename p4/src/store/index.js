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
        people: null
    },
    mutations: {
        setFavoritesIndex(state, payload) {
            state.favoritesIndex = payload;
        },
        setPeople(state, payload) {
            state.people = payload;
        },
        addPerson(state, payload) {
            _.merge(state.people, payload)
        }
    },
    actions: {
        setPeople(context) {
            app.axios.get(app.config.api + 'people.json').then(response => {
                console.log(response)
                console.log(typeof response)
                context.commit('setPeople', response.data);
            });
        }
    },
    getters: {
        getPersonById(state) {
            // only called if state.people exists
            return function (id) {
                console.log('in getPerson by id and people is ', state.people)
                console.log('typeof state.people', typeof state.people)

                console.log('using lodash: ', _.find(state.people, { id: id }))
                // return _.find(peopleArray, { 'id': id })

                let peopleArray = Object.values(state.people)
                console.log('peopleArray: ', peopleArray)
                console.log('typeof peopleArray: ', typeof peopleArray)
                console.log('using peopleArray: ', peopleArray.find(person => person.id == id))
                return state.peopleArray.find(person => person.id == id)
            }
        }
    }
})
