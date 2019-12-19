// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************

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