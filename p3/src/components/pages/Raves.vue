<template>
  <div>
    <h2>Raves</h2>
    <div v-if="people && ravingPeople">
      <router-link :to='{ name: "rave", params: {"id" : person.id }}' v-for='person in ravingPeople()' :key='person.id' :person='person'>
        <FeedbackCard :type="type" :detailed="false" :message="person.rave" :name="person.name" :id="person.id"/>
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
      type: "rave"
    }
  },
  methods: {
    ravingPeople: function() {
        return this.people.filter(people => people.rave.length > 0);
    }
  },
  mounted() {
    app.axios.get(app.config.api + 'people').then(response => {
      this.people = response.data
    })
  }
}
</script>

<style scoped>

</style>
