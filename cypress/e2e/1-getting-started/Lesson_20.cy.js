import GaragePage from '../../pages/GaragePage';
import ExpensesPage from '../../pages/ExpensesPage';
const qautoConfig = require('../../config/qauto.config');

describe('Test for Lesson 20', () => {
  let config;

  before(() => {
    const env = Cypress.env('env');
    if (env === 'qa') {
      config = require('../../config/qauto.config');
    } else if (env === 'qauto2') {
      config = require('../../config/qauto2.config');
    } else {
      throw new Error('Unknown environment');
    }
  });

  beforeEach(() => {
    cy.visit(config.e2e.baseUrl, {
      auth: {
        username: config.e2e.username,
        password: config.e2e.password,
      },
    });
    cy.contains('button', 'Sign In').click();
    cy.get('#signinEmail').type(config.e2e.email);
    cy.get('#signinPassword').type(config.e2e.authPassword, { sensitive: true });
    cy.get('button[type="button"]').contains('Login').click();
  });
   

  it('should add BMW X5 and add fuel expense with liters and total cost', () => {
    GaragePage.navigateToAddCar();
    GaragePage.addCar('BMW', 'X5', '100'); 

    cy.contains('BMW X5').should('be.visible');
    cy.contains('Add fuel expense').click();

    ExpensesPage.addExpense('','', '120', '100', '50');
  
    cy.get('.panel-page_heading.d-flex.flex-column.flex-lg-row').should('exist');
    cy.contains('Fuel expenses').should('be.visible');
    cy.get('.car-select-dropdown.dropdown').should('exist');

  });
});

