describe('ZipFoods', () => {
    it('Visits the homepage', () => {
        cy.visit('/')
        cy.contains('h2', 'Featured Products')
    })

    let product = {
      name: 'Driscoll’s Strawberries',
      slug: 'driscolls-strawberries'
    }

    it('shows all the products', () => {
        cy.visit('/products')
        cy.contains('h2', 'Products')
        cy.contains('[data-test="product-name"]', product.name)
        cy.get('[data-test="product-name"]').should('have.length.greaterThan', 9)
        cy.contains('[data-test="product-name"]', product.name).click()
        //confirm product page is showing the product
        cy.contains('[data-test="product-name"]', product.name)
    })

    it('interacts with cart', () => {
      cy.visit('/product/' + product.slug);
      cy.get('[data-test="add-to-cart-button"]').click();
      cy.contains('[data-test="cart-count"]', 1);
      cy.visit('/cart');
      cy.contains('[data-test="cart-contents"]', '1 x ' + product.name);
      cy.get('[data-test="remove-from-cart-button"]').click();
      cy.contains('[data-test="cart-count"]', 0);
      cy.contains('No items');
  })

  it('shows the categories page', () => {
    cy.visit('/categories');
    cy.contains('[data-test="category-name"]', 'baking');
    cy.get('[data-test="category-name"]').should('have.length.greaterThan', 7);
  })
})
