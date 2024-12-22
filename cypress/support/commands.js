Cypress.Commands.add('login', (username, password) => {
 
     cy.get('#signinEmail').type(username); // Логин
     cy.get('#signinPassword').type(password, { sensitive: true }); // Пароль
     cy.get('button[type="button"]').contains('Login').click(); // Нажимаем кнопку "Login"
 
     // Проверка, что пользователь попал на страницу панели управления после успешного входа
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
  

  