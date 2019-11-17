<template>
  <div id='products'>
    <h2>Raves</h2>
    <div v-if="people && ravingPeople">
      <router-link :to='{ name: "rave", params: {"id" : person.id }}' v-for='person in ravingPeople()' :key='person.id' :person='person'>
        <div class="card rave" >
          <h2>{{person.rave}}</h2>
        </div>
      </router-link>
    </div>
    <div v-else>
      Loading records...
    </div>
  </div>

</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'Raves',
  components: {
  },
  data: function() {
    return {
      people: null
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
