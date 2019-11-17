<template>
  <div>
    <h2>Rants</h2>
    <div v-if="people && rantingPeople">
      <router-link :to='{ name: "rant", params: {"id" : person.id }}' v-for='person in rantingPeople()' :key='person.id' :person='person'>
        <div class="card rant">
          <h2>{{person.rant}}</h2>
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
  name: 'Rants',
  components: {
  },
  data: function() {
    return {
      people: null
    }
  },
  methods: {
    rantingPeople: function() {
        return this.people.filter(people => people.rant.length > 0);
    }
  },
  mounted() {
    app.axios.get(app.config.api + 'people').then(response => {
      this.people = response.data
    })
  }
};
</script>

<style scoped>

</style>
