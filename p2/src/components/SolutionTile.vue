<template>
  <div
    class="letter"
    :class="[gameStatus, guessStatus]">
    {{ displayValue }}
  </div>
</template>

<script>
export default {
  name: 'SolutionTile',
  props: {
    letter: String,
    gameStatus: String,
    correctGuesses: Array
  },
  computed: {
    guessed: function () {
      return this.correctGuesses.includes(this.letter)
    },
    displayValue: function () {
      return this.guessed ? this.letter : '?'
    },
    guessStatus: function () {
      return this.guessed ? 'correct' : 'missed'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
