<template>
  <div class='product'>
      <router-link data-test="product-link" :to='{ name: "product", params: {"slug" : product.slug }}'>
          <div data-test="product-name" class='product-name'>{{ product.name }}</div>
          <img
              class='product-thumb'
              :alt='"Product image of  " + product.name'
              :src='"./../assets/images/products/" + product.slug + ".jpg"'
          />
      </router-link>
  </div>
</template>

<script>

export default {
  name: 'ShowProduct',
  props: ['product']
};
</script>

<style scoped>
</style>
