// NOTE: The same FeedbackList and Feedback and FeedbackCard components are used to 
// produce both rants and raves, so it's not necessary to test all features on both 
// types of feedback.

// ***********************************************************************
// To preserve favorite status throughout, I borrowed this hack to 
// preserve localStorage between Cypress tests from @pietmichal 
// https://github.com/cypress-io/cypress/issues/461#issuecomment-392070888
// as surfaced in 
// https://stackoverflow.com/questions/50471047/preserve-cookies-localstorage-session-across-tests-in-cypress


let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

// **********************************************************************

describe('test all the things!', () => {

  // define person for testing purposes
  let person = {
    "id": 1,
    "name": "Janet",
    "rave": "The people here are awesome.",
    "rant": "Bureacracy is painful. :("
  }

  it('visits the people page (homepage), sees all nav links and people records', () => {
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

  it('visits individual rave page via people page and favorites item', () => {
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
    // click nav link to visit raves page
    cy.contains('[data-test="nav-link"]', 'raves').click()
    cy.contains('h2', `Raves`)
    // confirm unfiltered list includes all raves
    cy.get('[data-test="feedback-card-rave"]').its('length').should('be.gte', 5);
    // confirm filtered list includes the item favorited in previous test
    cy.get('[data-test="radio-favorites"]').click();
    cy.contains('[data-test="feedback-card-rave"]', person.rave)
  })

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
    // uses link to get back to unfiltered list which shows all
    cy.get('[data-test="filter-span"]').click()
    cy.get('[data-test="feedback-card-rant"]').its('length').should('be.gte', 5);
  })

  it('visits specific rant page via click from rants page', () => {
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

  it('displays 404 for bad link', () => {
    // visit specific rave page via url
    cy.visit('/nonsense')
    // confirm correct contents
    cy.contains('h2', '404 Page Not Found')
  })
})

