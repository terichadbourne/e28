import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ShowProduct from '@/components/ShowProduct.vue'

describe('ShowProduct.vue', () => {
  it('shows a product', () => {
    let product =     {
            slug: 'nestle-toll-house-cookie-dough',
            name: 'Nestle Toll House Cookie Dough',
            description:
                'Get the classic taste that America loves in a ready to bake dough. Full of our famous morsels, these cookies deliver the chocolate flavor you’ve come to expect from Nestle Toll House.',
            price: 7.49,
            available: 325,
            weight: 2.25,
            perishable: true,
            categories: ['snacks', 'baking']
        }

    const wrapper = shallowMount(ShowProduct, {
      propsData: { product },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).to.include(product.name)

    let foundProductLink = wrapper.find('[data-test="product-link"]').exists()
    expect(foundProductLink).to.equal(true)
  })
})
