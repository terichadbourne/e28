<template>
  <div id='products'>
    <h2>Raves</h2>
      <div class="card rave" v-for='person in ravingPeople' :key='person.id' :person='person'>
        <h2>{{person.rave}}</h2>
        <p>- {{person.name}}</p>
      </div>
  </div>
</template>

<script>
import { people } from './../../people.js';

export default {
  name: 'Raves',
  components: {
  },
  data: function() {
    return {
      people: people
    }
  },
  computed: {
    ravingPeople: function() {
        return this.people.filter(people => people.rave.length > 0);
    }
  }
};
</script>

<style scoped>

</style>
