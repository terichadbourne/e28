<template>
  <div class='product'>
      <router-link :to='{ name: "product", params: {"id" : product.id }}'>
          <div class='product-name'>{{ product.name }}</div>
          <img
              class='product-thumb'
              :alt='"Product image of  " + product.name'
              :src='"./../assets/images/products/" + product.id + ".jpg"'
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
