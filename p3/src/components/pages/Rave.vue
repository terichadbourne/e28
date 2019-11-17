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
import { people } from './../../people.js';

export default {
  name: 'Rave',
  props: ['id'],
  data: function() {
    return {
      people: people
    }
  },
  computed: {
    person: function() {
      const id = parseInt(this.id)
      return this.people.filter(person => person.id === id)[0]
    }
  },
  mounted() {
    console.log(`this.id: `, this.id)
    console.log(`people: `, people)
  }
};
</script>

<style scoped>

</style>
