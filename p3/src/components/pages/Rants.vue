<template>
  <div id='products'>
    <h2>Rants</h2>
      <div class="card rant" v-for='person in rantingPeople' :key='person.id' :person='person'>
        <h2>{{person.rant}}</h2>
        <p>- {{person.name}}</p>
      </div>
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
