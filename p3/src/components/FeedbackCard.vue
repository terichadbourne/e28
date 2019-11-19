<template>
  <div>
      <div class="card" :class="{ favorite: isFavorite, rant: type=='rant', rave: type=='rave' }">
        <h2>{{message}}</h2>
        <p v-if="detailed">- {{name}}</p>
        <button
          class="favorite-icon"
          v-on:click.prevent="toggleFavorite"
          :aria-label="ariaLabel">❤
        </button>
      </div>
  </div>
</template>

<script>
import * as app from './../app.js';

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
      let favorites = new app.Favorites()
      this.isFavorite = favorites.getItem(this.cacheKey)
      this.ariaLabel = this.isFavorite ? "Remove from favorites" : "Add to favorites"
      app.store.favorites = favorites.getItems()
      console.log('about to emit')
      this.$emit('update-favorites', event)
      console.log('just emitted')
    },
    toggleFavorite () {
      let favorites = new app.Favorites()
      if (this.isFavorite) {
        favorites.remove(this.cacheKey);
      } else {
        favorites.add(this.cacheKey)
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
