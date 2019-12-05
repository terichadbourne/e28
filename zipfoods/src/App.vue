<template>
  <div id='app'>
    <img id='logo' alt='ZipFoods logo' src='./assets/images/zipfoods-logo.png' />
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
            <router-link exact :to='{ name: link }'>
                {{ link }}
                <span v-if='link == "cart"'>({{ cartCount }})</span>
            </router-link>
        </li>
      </ul>
    </nav>

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
      links: ['home', 'products', 'categories', 'cart']
    }
  },
  computed: {
    cartCount: function() {
        return this.$store.state.cartCount;
    }
  },
  mounted() {
    this.cart = new app.Cart()
    // Invoke the `setCartCount` mutation, passing the cart count as the payload
    this.$store.commit('setCartCount', this.cart.count());
    this.$store.dispatch('setProducts');
  }
};
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>
