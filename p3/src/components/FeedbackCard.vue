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
      isFavorite: null,
      ariaLabel: null,
      favorites: null
    }
  },
  methods: {
    updateFavoriteState () {
      this.isFavorite = this.favorites.getItem(this.type, this.id)
      this.ariaLabel = this.isFavorite ? "Remove from favorites" : "Add to favorites"
      app.store.favorites = this.favorites.getItems()
      console.log('about to emit')
      this.$emit('update-favorites', event)
      console.log('just emitted')
    },
    toggleFavorite () {
      if (this.isFavorite) {
        this.favorites.remove(this.type, this.id);
      } else {
        this.favorites.add(this.type, this.id)
      }
      this.updateFavoriteState()
    }
  },
  mounted () {
    this.favorites = new app.Favorites()
    this.updateFavoriteState()
  }
}
</script>

<style scoped>

</style>
