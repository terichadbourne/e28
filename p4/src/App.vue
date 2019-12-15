<template>
  <div id='app'>
    <h1>Rants & Raves</h1>
    <p>How's the company doing? Check out your colleagues' top rants and raves, submit your own, and favorite those you agree with. Your feedback will help us improve the way we work!</p>
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link exact :to='{ name: link }'>{{ link }}</router-link>
        </li>
      </ul>
    </nav>
    <h2>-----TEST DISPLAY FROM VUEX------</h2>
    <p>in app.vue, favorites from Vuex: {{ favorites }}</p>
    <h2>-----------------------------</h2>

    <router-view></router-view>
  </div>
</template>

<script>
import * as app from './app.js';

export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      links: ['people', 'raves', 'rants'],
      faves: null
    };
  },
  computed: {
    favorites: function() {
      return this.$store.state.favoritesIndex;
    }
  },
  mounted() {
    this.faves = new app.Faves();
    this.$store.commit('setFavoritesIndex', this.faves.getItems());
  }
};
</script>

<style lang='scss'>
@import './assets/css/rantsraves.scss';
</style>
