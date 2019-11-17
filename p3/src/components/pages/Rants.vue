<template>
  <div>
    <h2>Rants</h2>
      <router-link :to='{ name: "rant", params: {"id" : person.id }}' v-for='person in rantingPeople' :key='person.id' :person='person'>
        <div class="card rant">
          <h2>{{person.rant}}</h2>
        </div>
      </router-link>
  </div>
</template>

<script>
import { people } from './../../people.js';

export default {
  name: 'Rants',
  components: {
  },
  data: function() {
    return {
      people: people
    }
  },
  computed: {
    rantingPeople: function() {
        return this.people.filter(people => people.rant.length > 0);
    }
  }
};
</script>

<style scoped>

</style>
