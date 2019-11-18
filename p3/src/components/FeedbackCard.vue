<template>
  <div>
      <div class="card" :class="type">
        <h2>{{message}}</h2>
        <p v-if="detailed">- {{name}}</p>
        <button
          v-bind:class="{ favorite: isFavorite }"
          class="favorite-icon"
          v-on:click.prevent="toggleFavorite"
          :aria-label="ariaLabel">❤
        </button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'FeedbackCard',
  props: ['type', 'detailed', 'message', 'name', 'id'],
  data: function () {
    return {
      cacheKey: null,
      isFavorite: null,
      ariaLabel: null
    }
  },
  methods: {
    updateFavoriteState () {
      this.isFavorite = window.localStorage.getItem(this.cacheKey)
      this.ariaLabel = this.isFavorite ? "Remove from favorites" : "Add to favorites"
    },
    toggleFavorite () {
      if (this.isFavorite) {
        window.localStorage.removeItem(this.cacheKey)
      } else {
        window.localStorage.setItem(this.cacheKey, true)
      }
      this.updateFavoriteState()
    }
  },
  mounted () {
    this.cacheKey = `${this.type}-${this.id}`
    this.updateFavoriteState()
  }
}
</script>

<style scoped>

</style>
