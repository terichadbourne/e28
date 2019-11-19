<template>
  <div>
    <h2>Rants</h2>
      <!-- <p>sharedFavorites:
        {{sharedState.favorites}}</p> -->
    <button v-on:click="toggleFilter">Show
      <span v-if="filtered">All</span>
      <span v-else>Favorites</span>
    </button>
    <div v-if="people && rantingPeople" :class="{ filtered: filtered }">
      <p v-if="filtered">Favorite Rants</p>
      <p v-else>All Rants</p>
      <router-link :to='{ name: "rant", params: {"id" : person.id }}' v-for='person in rantingPeople' :key='person.id' :person='person' >
        <FeedbackCard :type="type" :detailed="false" :message="person.rant" :name="person.name" :id="person.id" v-on:update-favorites="updateFavorites"/>
      </router-link>
    </div>
    <div v-else>
      Loading records...
    </div>
  </div>

</template>

<script>
import * as app from './../../app.js';
import FeedbackCard from './../FeedbackCard.vue'

export default {
  name: 'Rants',
  components: {
    FeedbackCard
  },
  data: function() {
    return {
      people: null,
      type: "rant",
      allLocalStorage: null,
      sharedState: app.store,
      filtered: false,
      favorites: null
    }
  },
  computed: {
    rantingPeople: function () {
      return this.people.filter(people => people.rant.length > 0);
    },
  },
  methods: {
    toggleFilter: function (){
      this.$forceUpdate()
       if (this.filtered) {
         this.filtered = false
      } else {
        this.filtered = true
      }
    },
    updateFavorites: function () {
      console.log('in updateFavorites in rants')
      app.store.favorites = this.favorites.getItems()
    }
  },
  mounted() {
    this.favorites = new app.Favorites();
    app.axios.get(app.config.api + 'people').then(response => {
      this.people = response.data
      this.updateFavorites()
    })
  },
  beforeUpdate () {
    this.updateFavorites()
  }
}
</script>

<style scoped>

</style>
