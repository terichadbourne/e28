<template>
  <div id='products'>
    <h2>People</h2>
      <div class="card person" v-for='person in people' :key='person.id' :person='person'>
        <h2>{{person.name}}</h2>
          <p v-if="person.rave">❤️
            <router-link :to='{ name: "rave", params: {"id" : person.id }}'>
              {{person.rave}}
            </router-link>
          </p>
          <p v-if="person.rant">🔥
            <router-link :to='{ name: "rant", params: {"id" : person.id }}'>
              {{person.rant}}
            </router-link>
          </p>
      </div>
  </div>
</template>

<script>
import { people } from './../../people.js';

export default {
  name: 'People',
  components: {
  },
  data: function() {
    return {
      people: people
    }
  },
  mounted() {
  }
};
</script>

<style scoped>

</style>
