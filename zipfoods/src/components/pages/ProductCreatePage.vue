<template>
    <div id='product-create'>
        <h1>Add a Product</h1>
        <form @submit.prevent='handleSubmit'>
            <div class='form-group'>
                <label for='name'>URL</label>
                <input
                    type='text'
                    :class='{ "form-input-error": $v.product.slug.$error }'
                    id='slug'
                    v-model='$v.product.slug.$model'
                />

                <div v-if='$v.product.slug.$error'>
                    <div
                        class='form-feedback-error'
                        v-if='!$v.product.slug.required'
                    >Product URL is required.</div>
                    <div
                        class='form-feedback-error'
                        v-else-if='!$v.product.slug.minLength'
                    >Product URL must be at least 4 characters long.</div>

                    <div
                        class='form-feedback-error'
                        v-else-if='!$v.product.slug.doesNotExist'
                    >This URL is not available.</div>
                </div>

                <small class='form-help'>Min: 4</small>
            </div>

            <div class='form-group'>
                <label for='name'>Name</label>
                <input
                    type='text'
                    :class='{ "form-input-error": $v.product.name.$error }'
                    id='name'
                    v-model='$v.product.name.$model'
                />
                <div v-if='$v.product.name.$error'>
                    <div
                        class='form-feedback-error'
                        v-if='!$v.product.name.required'
                    >Product name is required.</div>
                </div>
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

            <div class='form-feedback-error' v-if='formHasErrors'>Please correct the above errors</div>
        </form>
    </div>
</template>

<script>
import * as app from './../../app.js';
import { required, minLength } from 'vuelidate/lib/validators'

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
            product: product,
            formHasErrors: false
        };
    },
    watch: {
      '$v.$anyError': function () {
        this.formHasErrors = this.$v.$anyError
      }
    },
    methods: {
      handleSubmit: function () {
        if (!this.formHasErrors) {
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
        }
      }
    },
    validations: {
      product: {
          slug: {
              required,
              minLength: minLength(4),
              doesNotExist(value) {
                  return !this.$store.getters.getProductBySlug(value);
              }
          },
          name: {
              required
          }
      }
  }
};
</script>

<style scoped>
#description {
    height: 150px;
}
</style>
