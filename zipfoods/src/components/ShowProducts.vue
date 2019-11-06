<template>
  <div id="products">
    <h2>Products</h2>
    <ShowProduct v-for="product in products" :key="product.id" :product="product"></ShowProduct>
  </div>
</template>

<script>
import ShowProduct from "./ShowProduct.vue";
import { products } from './../products.js';

export default {
    name: 'ShowProducts',
    components: {
        ShowProduct
    },
    data: function () {
        return {
            products: products
        }
    }
}
</script>

<style scoped>
</style>
