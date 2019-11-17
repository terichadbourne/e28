<template>
  <div>
    <h2>Rave {{id}}</h2>
      <div v-if="person && person.rave.length > 0" class="card rave">
        <h2>{{person.rave}}</h2>
        <p>- {{person.name}}</p>
      </div>
      <div v-else>
        <p>Oops! There's no rave with that ID.</p>
      </div>
  </div>
</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'Rave',
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
}
</script>

<style scoped>

</style>
