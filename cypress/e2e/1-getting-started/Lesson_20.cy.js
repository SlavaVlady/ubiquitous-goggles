import GaragePage from '../../pages/GaragePage';
import ExpensesPage from '../../pages/ExpensesPage';

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
        
        ExpensesPage.navigateToExpenses();
        ExpensesPage.addExpense('', '', '120', '100', '50');
        ExpensesPage.expenseHeader.should('exist');
        ExpensesPage.expenseSection.should('be.visible');
        ExpensesPage.carDropdown.should('exist');
    });
});
