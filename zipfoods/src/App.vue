<template>
  <div id="app">
    <img id="logo" alt="ZipFoods logo" src="./assets/images/zipfoods-logo.png" />
    <p>ZipFoods is your one-stop shop for convenient online grocery shopping in the greater Boston area.</p>
    <ShowProducts></ShowProducts>
  </div>
</template>

<script>
import ShowProducts from "./components/ShowProducts.vue";

export default {
  name: 'app',
  components: {
    ShowProducts
  }
};
</script>

<style lang='scss'>
@import "./assets/css/zipfoods.scss";
</style>
