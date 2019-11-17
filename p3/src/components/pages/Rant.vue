<template>
  <div>
    <h2>Rant {{id}}</h2>
      <div v-if="person && person.rant.length > 0" class="card rant">
        <h2>{{person.rant}}</h2>
        <p>- {{person.name}}</p>
      </div>
      <div v-else>
        <p>Oops! There's no rant with that ID.</p>
      </div>
  </div>
</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'Rant',
  props: ['id'],
  data: function() {
    return {
      person: null
    }
  },
  mounted() {
    app.axios.get(app.config.api + 'people/' + this.id).then(response => {
      this.person = response.data
    })
  }
};
</script>

<style scoped>

</style>
