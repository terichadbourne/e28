
describe('home-page', () => {
  it('visits the homepage (people)', () => {
    cy.visit('/')
    cy.contains('h2', 'People')

    // Confirm we see at least 5 people and 3 each of rants and raves
    cy.get('[data-test="person-card"]').its('length').should('be.gte', 5);
    cy.get('[data-test="rave-link"]').its('length').should('be.gte', 3);
    cy.get('[data-test="rant-link"]').its('length').should('be.gte', 3);
  })
})

// describe('products-page', () => {

//   // Define a product we can use throughout our tests
//   let product = {
//       name: 'Driscoll’s Strawberries',
//       slug: 'driscolls-strawberries'
//   }

//   it('shows all the products', () => {

//       cy.visit('/products')
//       cy.contains('h2', 'Products')

//       // Confirm we see at least 10 products (that's how many product seeds we have)
//       cy.get('[data-test="product-name"]').its('length').should('be.gte', 10);

//       // Confirm we see a our test product
//       cy.contains('[data-test="product-name"]', product.name)

//       // Confirm we can click on a product and get to its individual page
//       cy.get('[data-test="product-name"]').contains(product.name).click();

//       // Confirm the test product page loads
//       cy.contains('[data-test="product-name"]', product.name)
//       cy.url().should('include', product.slug)

//   })

//   it('shows the correct product images', () => {

//       cy.visit('/products')

//       cy.get('[data-test=product-image-' + product.slug + ']').should('have.attr', 'src').should('include', product.slug)
//   })

// })

// describe('product-page', () => {

//   // Test product
//   let product = {
//       name: 'Driscoll’s Strawberries',
//       slug: 'driscolls-strawberries'
//   }

//   it('shows product', () => {
//       cy.visit('/product/' + product.slug);
//       cy.contains('[data-test="product-name"]', product.name);
//   })

//   it('adds to cart', () => {
//       cy.visit('/product/' + product.slug);
//       cy.get('[data-test="add-to-cart-button"]').click();
//       cy.get('[data-test="add-to-cart-confirmation"]').should('exist');
//       cy.contains('[data-test="cart-count"]', 1);
//   })
// })


// describe('cart-page', () => {

//   // Test product
//   let product = {
//       name: 'Driscoll’s Strawberries',
//       slug: 'driscolls-strawberries'
//   }

//   it('adds and removes from cart', () => {
//       // Add to cart from product page
//       cy.visit('/product/' + product.slug);
//       cy.get('[data-test="add-to-cart-button"]').click();

//       // Confirm cart shows product
//       cy.visit('/cart');
//       cy.contains('[data-test="cart-contents"]', '1 x ' + product.name);

//       // Remove from cart 
//       cy.get('[data-test="remove-from-cart-button"]').click();
//       cy.contains('[data-test="cart-count"]', 0);
//       cy.contains('No items');
//   })
// })