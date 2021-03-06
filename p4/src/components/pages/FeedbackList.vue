<template>
  <div>
    <h2>{{ pageTitle }}</h2>
    <div>
      <input
        data-test='radio-all'
        type='radio'
        id='all'
        :value='false'
        name='filteredView'
        v-model='filtered'
      />
      <label for='all'>All</label>

      <input
        data-test='radio-favorites'
        type='radio'
        id='favorites'
        :value='true'
        name='filteredView'
        v-model='filtered'
      />
      <label for='favorites'>Favorites</label>
    </div>
    <div v-if='!people'>Loading records...</div>
    <div v-else-if='people && !filteredPeople'>No ${type}s in database.</div>
    <div v-else-if='!filtered || (filtered && (favoritesIndex[favoritesKey].length > 0))'>
      <router-link
        :to='{ name: type, params: {"id" : person.id } }'
        v-for='person in filteredList'
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

    <div data-test='no-favorites' class='form-error' v-if='$v.filteredView.noFilteredFavorites'>
      <p>
        Oops! Nothing to see here.
        <span
          data-test='filter-span'
          class='fake-link'
          v-on:click='toggleFilter'
        >View all {{ type }}s</span> to start marking your favorites.
      </p>
    </div>
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
      // return records for feedback of correct type
      return this.people.filter(person => person[this.type].length > 0);
    },
    filteredFavorites: function() {
      // return records for feedback of correct type that are marked as favorites
      return this.filteredPeople.filter(person =>
        this.favoritesIndex[this.favoritesKey].includes(person.id)
      );
    },
    filteredList: function() {
      // return appropriate records based on whether the list is filtered via radio button
      return this.filtered ? this.filteredFavorites : this.filteredPeople;
    },
    pageTitle: function() {
      return this.type.charAt(0).toUpperCase() + this.type.slice(1) + 's';
    },
    favoritesIndex: function() {
      return this.$store.state.favoritesIndex;
    },
    favoritesKey: function() {
      return (
        'favorite' +
        this.type.charAt(0).toUpperCase() +
        this.type.slice(1) +
        's'
      );
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
    app.axios.get(app.config.api + 'people.json').then(response => {
      this.people = response.data.slice(1);
    });
  },
  validations: {
    filteredView: {
      noFilteredFavorites() {
        return (
          this.filtered && !(this.favoritesIndex[this.favoritesKey].length > 0)
        );
      }
    }
  }
};
</script>

<style scoped>
</style>
