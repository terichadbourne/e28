<template>
  <div>
    <p>ZipFoods is your one-stop shop for convenient online grocery shopping in the greater Boston area.</p>
    <ShowFeatured :category='featuredCategory'></ShowFeatured>
  </div>
</template>

<script>
import ShowFeatured from './ShowFeatured.vue';

export default {
  name: 'ShowHome',
  components: {
    ShowFeatured
  },
  data: function() {
    return {
      featuredCategory: 'snacks'
    };
  }
};
</script>

<style scoped>
</style>
