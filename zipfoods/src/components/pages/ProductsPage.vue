<template>
  <div id='products'>
    <h2>Products</h2>
    <ShowProduct v-for='product in products' :key='product.id' :product='product'></ShowProduct>
  </div>
</template>

<script>
import ShowProduct from './../ShowProduct.vue';
import * as app from './../../app.js';

export default {
  name: 'ProductsPage',
  components: {
    ShowProduct
  },
  data: function() {
    return {
      products: null
    }
  },
  mounted() {
      app.axios.get(app.config.api + 'products').then(response => {
        // console.log(response)
        // console.log(response.data)
          this.products = response.data;
      });
  }
};
</script>

<style scoped>
</style>
