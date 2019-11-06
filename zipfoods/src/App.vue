<template>
  <div id='app'>
    <img id='logo' alt='ZipFoods logo' src='./assets/images/zipfoods-logo.png' />
    <p>ZipFoods is your one-stop shop for convenient online grocery shopping in the greater Boston area.</p>
    <ShowFeatured :products='products'></ShowFeatured>
    <ShowProducts :products='products'></ShowProducts>
  </div>
</template>

<script>
import ShowProducts from './components/ShowProducts.vue';
import ShowFeatured from './components/ShowFeatured.vue';
import { products } from './products.js';

export default {
  name: 'app',
  components: {
    ShowProducts,
    ShowFeatured
  },
  data: function() {
    return {
      products: products
    };
  }
};
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>
