<template>
  <div id='products'>
    <h2>People</h2>
    <div v-if='people'>
      <div
        data-test='person-card'
        class='card person'
        v-for='person in people'
        :key='person.id'
        :person='person'
      >
        <h2>{{ person.name }}</h2>
        <p v-if='person.rave'>
          ❤️
          <router-link
            :data-test='"rave-link-" + person.id'
            :to='{ name: "rave", params: {"id" : person.id }}'
          >{{ person.rave }}</router-link>
        </p>
        <p v-if='person.rant'>
          🔥
          <router-link
            :data-test='"rant-link-" + person.id'
            :to='{ name: "rant", params: {"id" : person.id }}'
          >{{ person.rant }}</router-link>
        </p>
      </div>
    </div>
    <div v-else>Loading records...</div>
  </div>
</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'People',
  components: {},
  data: function() {
    return {
      people: null
    };
  },
  mounted() {
    app.axios.get(app.config.api + 'people').then(response => {
      this.people = response.data;
    });
  }
};
</script>

<style scoped>
</style>
