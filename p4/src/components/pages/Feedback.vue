<template>
  <div>
    <h2>{{ pageTitle }}</h2>
    <div v-if='person && person[type].length > 0'>
      <FeedbackCard
        :type='type'
        :detailed='true'
        :message='person[type]'
        :name='person.name'
        :id='person.id'
      />
    </div>
    <div v-else>
      <p>Oops! There's no {{ type }} with that ID.</p>
    </div>
  </div>
</template>

<script>
import * as app from './../../app.js';
import FeedbackCard from './../FeedbackCard.vue';

export default {
  name: 'Feedback',
  props: ['id', 'type'],
  components: {
    FeedbackCard
  },
  data: function() {
    return {
      person: null
    };
  },
  computed: {
    pageTitle: function() {
      return (
        this.type.charAt(0).toUpperCase() + this.type.slice(1) + ' ' + this.id
      );
    }
  },
  mounted() {
    app.axios.get(app.config.api + 'people/' + this.id).then(response => {
      this.person = response.data;
    });
  }
};
</script>

<style scoped>
</style>
