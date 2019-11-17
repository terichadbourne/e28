<template>
  <div id='products'>
    <h2>Raves</h2>
    <router-link :to='{ name: "rave", params: {"id" : person.id }}' v-for='person in ravingPeople' :key='person.id' :person='person'>
      <div class="card rave" >
        <h2>{{person.rave}}</h2>
      </div>
    </router-link>.
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
