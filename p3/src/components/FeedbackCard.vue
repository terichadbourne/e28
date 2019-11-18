<template>
  <div>
      <div class="card" :class="type">
        <h2>{{message}}</h2>
        <p v-if="detailed">- {{name}}</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'FeedbackCard',
  props: ['type', 'detailed', 'message', 'name']
}
</script>

<style scoped>

</style>
