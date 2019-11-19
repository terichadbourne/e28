<template>
  <div>
    <h2>Raves</h2>
    <!-- <p>sharedFavorites:
      {{sharedState.favorites}}</p> -->
  <button v-on:click="toggleFilter">Show
    <span v-if="filtered">All</span>
    <span v-else>Favorites</span>
  </button>
    <div v-if="people && ravingPeople" :class="{ filtered: filtered }">
      <router-link :to='{ name: "rave", params: {"id" : person.id }}' v-for='person in ravingPeople' :key='person.id' :person='person'>
        <FeedbackCard :type="type" :detailed="false" :message="person.rave" :name="person.name" :id="person.id" v-on:update-favorites="updateFavorites"/>
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
  name: 'Raves',
  components: {
    FeedbackCard
  },
  data: function() {
    return {
      people: null,
      type: "rave",
      sharedState: app.store,
      filtered: false,
      favorites: null
    }
  },
  computed: {
    ravingPeople: function() {
        return this.people.filter(people => people.rave.length > 0);
    }
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
      console.log('in updateFavorites in raves')
      app.store.favorites = this.favorites.getItems()
    }
  },
  mounted() {
    this.favorites = new app.Favorites();
    app.axios.get(app.config.api + 'people').then(response => {
      this.people = response.data
      this.updateFavorites()
    })
  }
}
</script>

<style scoped>

</style>
