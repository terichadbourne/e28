<template>
  <button
    class="guess"
    :disabled="!liveGame || guessed"
    :class="[{ incorrect: guessed && !correct }, { correct: guessed && correct }]"
    v-on:click="processGuess">
    {{ letter }}
  </button>
</template>

<script>
export default {
  name: 'GuessButton',
  props: {
    letter: String,
    liveGame: Boolean,
    correct: Boolean
  },
  data: function () {
    return {
      guessed: false,
    }
  },
  methods: {
    processGuess: function () {
      this.$emit('guess-letter', this.letter)
      this.guessed = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
