<template>
  <div>
    <h2>Rant {{id}}</h2>
    <div v-if="person && person.rant.length > 0">
      <FeedbackCard :type="type" :detailed="true" :message="person.rant" :name="person.name" :id="person.id"/>
    </div>
      <div v-else>
        <p>Oops! There's no rant with that ID.</p>
      </div>
  </div>
</template>

<script>
import * as app from './../../app.js';
import FeedbackCard from './../FeedbackCard.vue'

export default {
  name: 'Rant',
  props: ['id'],
  components: {
    FeedbackCard
  },
  data: function() {
    return {
      person: null,
      type: "rant"
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
