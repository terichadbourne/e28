import { expect } from 'chai'
import { mount, RouterLinkStub } from '@vue/test-utils'
import ProductsPage from '@/components/pages/ProductsPage.vue'

describe('ProductsPage.vue', () => {

    let product = {
        slug: 'driscolls-strawberries',
        name: 'Driscoll’s Strawberries',
        description:
            'Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.',
        price: 4.99,
        available: 0,
        weight: 1,
        perishable: true,
        categories: ['produce', 'fruits']
    }

    it('shows all the products', () => {

        const wrapper = mount(ProductsPage, {
            // We can pass mount a `computed` option and within it we can overwrite
            // any of our componenent's computed properties.
            // This allows us to bypass the Vuex store for testing purposes
            // For alternative ways of dealing with Vuex when testing components, see the following:
            // https://vue-test-utils.vuejs.org/guides/#testing-vuex-in-components
            // https://lmiller1990.github.io/vue-testing-handbook/testing-vuex.html
            computed: {
                products: function () {
                    return [product]
                }
            },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        expect(wrapper.text()).to.include('Products');
        expect(wrapper.text()).to.include('Driscoll’s Strawberries');
    })
})
