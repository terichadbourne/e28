<template>
  <div>
    <h2>Categories</h2>
    <ul class='cleanList'>
      <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import * as app from './../../app.js';
export default {
    name: 'CategoriesPage',
    data: function() {
        return {
            products: null,
            categories: null
        };
    },
    methods: {
        loadCategories: function() {
            let categories = this.products.map(product => product.categories);
            let mergedCategories = [].concat.apply([], categories);
            // Return unique, sorted categories
            this.categories = [...new Set(mergedCategories)].sort();
        }
    },
    mounted() {
        app.axios.get(app.config.api + 'products').then(response => {
            this.products = response.data;
            this.loadCategories();
        });
    }
};
</script>

<style scoped>
</style>
