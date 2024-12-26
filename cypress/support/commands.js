Cypress.Commands.add('login', (email, password) => {
  cy.get('#signinEmail').type(email);
  cy.get('#signinPassword').type(password, { sensitive: true });
  cy.get('button[type="button"]').contains('Login').click();
  cy.url().should('include', '/panel/garage');
});



Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      options.log = false;
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      });
    }
    return originalFn(element, text, options);
  });
  

  