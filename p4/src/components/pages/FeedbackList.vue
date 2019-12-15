<template>
  <div>
    <h2>{{ pageTitle }}</h2>

    <p>Favorites in feedback list if not computed there: {{ favorites }}</p>
    <div>
      <input type='radio' id='all' :value='false' v-model='filtered' />
      <label for='all'>All</label>

      <input type='radio' id='favorites' :value='true' v-model='filtered' />
      <label for='favorites'>Favorites</label>
    </div>
    <div v-if='people && filteredPeople' :class='{ filtered: filtered }'>
      <router-link
        :to='{ name: type, params: {"id" : person.id } }'
        v-for='person in filteredPeople'
        :key='person.id'
        :person='person'
      >
        <FeedbackCard
          :type='type'
          :detailed='false'
          :message='person[type]'
          :name='person.name'
          :id='person.id'
        />
      </router-link>
    </div>
    <div v-else>Loading records...</div>
  </div>
</template>

<script>
import * as app from './../../app.js';
import FeedbackCard from './../FeedbackCard.vue';

export default {
  name: 'FeedbackList',
  components: {
    FeedbackCard
  },
  props: ['type'],
  data: function() {
    return {
      people: null,
      filtered: false,
      faves: null
    };
  },
  computed: {
    filteredPeople: function() {
      // return list of people with rants or raves as defined by type property
      return this.people.filter(people => people[this.type].length > 0);
    },
    pageTitle: function() {
      return this.type.charAt(0).toUpperCase() + this.type.slice(1) + 's';
    },
    favorites: function() {
      return this.$store.state.favoritesIndex;
    }
  },
  methods: {
    toggleFilter: function() {
      // toggle display of all items versus just favorited items when radio button is clicked
      this.$forceUpdate();
      if (this.filtered) {
        this.filtered = false;
      } else {
        this.filtered = true;
      }
    }
  },
  mounted() {
    // this.faves = new app.Faves();
    app.axios.get(app.config.api + 'people').then(response => {
      this.people = response.data;
    });
  }
};
</script>

<style scoped>
</style>
