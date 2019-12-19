// NOTE: The same FeedbackList and Feedback and FeedbackCard components are used to 
// produce both rants and raves, so it's not necessary to test all features on both 
// types of feedback.

describe('test all the things!', () => {

  // define person for testing purposes
  let person = {
    "id": 1,
    "name": "Janet",
    "rave": "The people here are awesome.",
    "rant": "Bureacracy is painful. :("
  }

  it('visits the homepage, sees all nav links and people records', () => {
    // visit homepage (people component)
    cy.visit('/')
    cy.contains('h2', 'People')

    // confirm all nav links present
    cy.contains('[data-test="nav-link"]', 'people')
    cy.contains('[data-test="nav-link"]', 'raves')
    cy.contains('[data-test="nav-link"]', 'rants')

    // confirm we see at least 6 people 
    cy.get('[data-test="person-card"]').its('length').should('be.gte', 6);

    // confirm we see correct rave and rant links for person 1
    cy.contains(`[data-test="rave-link-${person.id}"]`, person.rave)
    cy.contains(`[data-test="rant-link-${person.id}"]`, person.rant)
  })

  it('visits individual feedback page via people page and favorites item', () => {
    // confirm we can click on a rave from people page and reach its invidual page
    cy.contains(`[data-test="rave-link-${person.id}"]`, person.rave).click();
    // confirm correct contents 
    cy.contains('h2', `Rave ${person.id}`)
    cy.contains('h2', person.rave)
    cy.contains('p', `- ${person.name}`)
    // favorite the specified rave
    cy.get('[data-test="favorite-button"]').click()
  })

  it('visits raves page via nav link, sees all raves and favorited item', () => {
    // click 
    cy.contains('[data-test="nav-link"]', 'raves').click()
    cy.contains('h2', `Raves`)
    // confirm unfiltered list includes all raves
    cy.get('[data-test="feedback-card-rave"]').its('length').should('be.gte', 5);
    // confirm filtered list includes the favorite just favorited
    cy.get('[data-test="radio-favorites"]').click();
    cy.contains('[data-test="feedback-card-rave"]', person.rave)
  })


  // THIS TEST IS FAILING. Is it not clicking properly? 
  // Or does it lose its access to local storage between 'it' tests? 
  // (The test for viewing the message about no favorites does 
  // work correctly in the folowing test.)  
  // I tried wrapping the last test in window.setTimeout but it made the test 
  // disappear in Cypress
  it('unfavorites item and sees error message re no favorites to display', () => {
    // click to unfavorite
    cy.contains('[data-test="feedback-card-rave"]', person.rave).get('[data-test="favorite-button"]').click()
    // confirm message about no favorites appears after unfavoriting
    cy.get('[data-test="no-favorites"]')
  })

  it('visits rants page via url, sees all rants and no favorited items', () => {
    cy.visit('/rants')
    cy.contains('h2', `Rants`)
    // confirm unfiltered list includes all rants
    cy.get('[data-test="feedback-card-rant"]').its('length').should('be.gte', 5);
    // confirm filtered list includes the favorite just favorited
    cy.get('[data-test="radio-favorites"]').click();
    cy.get('[data-test="no-favorites"]')
    // uses link to get back to unfiltered list confirmed to show all 
    cy.get('[data-test="filter-span"]').click()
    cy.get('[data-test="feedback-card-rant"]').its('length').should('be.gte', 5);
  })

  it('visits specific rant page via rants page', () => {
    // click to specific rant page from card on rants page
    cy.contains('[data-test="feedback-card-rant"]', person.rant).click()
    // confirm correct contents
    cy.contains('h2', `Rant ${person.id}`)
    cy.contains('h2', person.rant)
    cy.contains('p', `- ${person.name}`)
  })

  it('visits specific rave page via url', () => {
    // visit specific rave page via url
    cy.visit('/raves/1')
    // confirm correct contents
    cy.contains('h2', `Rave ${person.id}`)
    cy.contains('h2', person.rave)
    cy.contains('p', `- ${person.name}`)
  })

})

