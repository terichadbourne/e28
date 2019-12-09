<template>
    <div id='product-create'>
        <h1>Add a Product</h1>
        <form @submit.prevent="handleSubmit">
            <div class='form-group'>
                <label for='name'>URL</label>
                <input type='text' id='slug' v-model='product.slug' />

                <small class='form-help'>Min: 4</small>
            </div>

            <div class='form-group'>
                <label for='name'>Name</label>
                <input type='text' id='name' v-model='product.name' />
            </div>

            <div class='form-group'>
                <label for='description'>Description</label>
                <textarea id='description' v-model='product.description'></textarea>
            </div>

            <div class='form-group'>
                <label for='price'>Price</label>
                <input type='text' id='price' v-model='product.price' />
            </div>

            <div class='form-group'>
                <label for='weight'>Weight</label>
                <input type='text' id='weight' v-model='product.weight' />
                <small class='form-help'>Decimal value in lbs.</small>
            </div>

            <div class='form-group'>
                <label for='categories'>Categories</label>

                <input type='text' id='categories' v-model='product.categories' />
                <small id='categoriesHelp' class='form-help'>Comma separated</small>
            </div>

            <div class='form-group'>
                <label class='form-checkbox-label'>
                    <input type='checkbox' v-model='product.perishable' /> Perishable
                </label>
            </div>

            <button type='submit'>Add Product</button>

        </form>
    </div>
</template>

<script>
import * as app from './../../app.js';
let product = {};
// If in dev mode, we'll pre-fill the product to make demo/testing easier
if (process.env.NODE_ENV == 'development') {
    product = {
        slug: 'indiana-gourmet-kettlecorn-popcorn',
        name: 'Indiana Gourmet Kettlecorn Popcorn',
        description:
            'We combine the finest popping corn, the right amount of salt and pure sugar cane, then we heat it just right, so that the sugar is melting just as the corn starts to pop—leaving every piece with a thin shell of salty sweetness. Be careful, it’s hard to eat just one bite of our handcrafted, gluten free Original Kettlecorn. Munch Better.',
        price: 4.49,
        weight: 0.44,
        perishable: false,
        categories: ['snacks', 'gluten-free']
    };
} else {
    product = {
        slug: '',
        name: '',
        description: '',
        price: '',
        weight: '',
        perishable: false,
        categories: []
    };
}
export default {
    name: 'ProductCreatePage',
    data: function() {
        return {
            product: product
        };
    },
    methods: {
      handleSubmit: function () {
        // Validate product info from form
        // Axios request to server to persist new product
        app.axios
          .post((app.config.api + 'products.json'), this.product)
          .then(response => {
              console.log(response)
              let key = response.data.name
              this.$store.commit('addProduct', { [key]: this.product })
              this.$router.push({
                name: 'product',
                params: {slug: this.product.slug}
              })
        });
        // update Vuex store
      }
    }
};
</script>

<style scoped>
#description {
    height: 150px;
}
</style>
