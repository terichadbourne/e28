<template>
  <div>
    <h2>Rave {{ id }}</h2>
    <div v-if="person && person.rave.length > 0">
      <FeedbackCard :type="type" :detailed="true" :message="person.rave" :name="person.name" :id="person.id"/>
    </div>
      <div v-else>
        <p>Oops! There's no rave with that ID.</p>
      </div>
  </div>
</template>

<script>
import * as app from './../../app.js';
import FeedbackCard from './../FeedbackCard.vue'

export default {
  name: 'Rave',
  props: ['id'],
  components: {
    FeedbackCard
  },
  data: function() {
    return {
      person: null,
      type: "rave"
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
