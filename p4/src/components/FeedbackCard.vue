<template>
  <div>
    <div
      :data-test='"feedback-card-" + type'
      class='card'
      :class='{ favorite: isFavorite, rant: type=="rant", rave: type=="rave" }'
    >
      <h2>{{message}}</h2>
      <p v-if='detailed'>- {{name}}</p>
      <button
        data-test='favorite-button'
        class='favorite-icon'
        v-on:click.prevent='toggleFavorite'
        :aria-label='ariaLabel'
      >❤</button>
    </div>
  </div>
</template>

<script>
import * as app from './../app.js';

export default {
  name: 'FeedbackCard',
  props: ['type', 'detailed', 'message', 'name', 'id'],
  data: function() {
    return {
      isFavorite: null,
      ariaLabel: null,
      faves: null
    };
  },
  methods: {
    updateFavoriteUI() {
      this.isFavorite = this.faves.getItem(this.type, this.id);
      this.ariaLabel = this.isFavorite
        ? 'Remove from favorites'
        : 'Add to favorites';
    },
    toggleFavorite() {
      this.faves = new app.Faves();
      if (this.isFavorite) {
        this.faves.remove(this.type, this.id);
      } else {
        this.faves.add(this.type, this.id);
      }
      this.updateFavoriteUI();
      this.$store.commit('setFavoritesIndex', this.faves.getItems());
    }
  },
  mounted() {
    this.faves = new app.Faves();
    this.updateFavoriteUI();
  }
};
</script>

<style scoped>
</style>
