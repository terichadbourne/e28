<template>
  <div id='app'>
    <img id='logo' alt='ZipFoods logo' src='./assets/images/zipfoods-logo.png' />
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
          <a href='#' @click='page = link'>{{ link }}</a>
        </li>
      </ul>
    </nav>
    <component :is='linkComponents[page]'></component>
  </div>
</template>

<script>
import ShowProducts from './components/ShowProducts.vue';
import ShowHome from './components/ShowHome.vue';
import ShowCategories from './components/ShowCategories.vue';
import { products } from './products.js';

export default {
  name: 'app',
  components: {
    ShowProducts,
    ShowHome,
    ShowCategories
  },
  data: function() {
    return {
      products: products,
      page: 'home',
      links: ['home', 'products', 'categories'],
      linkComponents: {
        home: 'ShowHome',
        products: 'ShowProducts',
        categories: 'ShowCategories'
      }
    };
  }
};
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>
