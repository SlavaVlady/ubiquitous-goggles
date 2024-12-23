/// <reference types="cypress" />

describe('Registration Tests with Basic Auth', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
        cy.contains('Sign up').click();
    });
    
    it('register successfully with valid details', () => {
            const registeredEmail = `test${Date.now()}vs@mailinator.com`;
            cy.log(`Registering user with email: ${registeredEmail}`);
            cy.get('#signupName').type('Vlada');
            cy.get('#signupLastName').type('Test');
            cy.get('#signupEmail').type(registeredEmail);
            cy.get('#signupPassword').type('Test1234!', { sensitive: true });
            cy.get('#signupRepeatPassword').type('Test1234!', { sensitive: true });
            cy.contains('Register').click();
            cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });     

    it('should show an error for a name with 1 character', () => {
        cy.get('#signupName').type('A');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('Test1234!');
        cy.get('#signupRepeatPassword').type('Test1234!');
        cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });

    it('should show an error for a name with 21 characters', () => {
        cy.get('#signupName').type('A'.repeat(21));
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('Test1234!');
        cy.get('#signupRepeatPassword').type('Test1234!');
        cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });


    it('should show an error for a name with only numbers', () => {
        cy.get('#signupName').type('12345');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('Test1234!');
        cy.get('#signupRepeatPassword').type('Test1234!');
        cy.contains('Name is invalid').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });

    it('should show an error for a last name with 1 character', () => {
        cy.get('#signupName').type('Test');
        cy.get('#signupLastName').type('T');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('Test1234!');
        cy.get('#signupRepeatPassword').type('Test1234!');
        cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });

    it('should show an error for a last name with 21 characters', () => {
        cy.get('#signupName').type('Test');
        cy.get('#signupLastName').type('T'.repeat(21));
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('Test1234!');
        cy.get('#signupRepeatPassword').type('Test1234!');
        cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });
   
    it('should show an error for a last name with only numbers', () => {
        cy.get('#signupName').type('Test');
        cy.get('#signupLastName').type('12345');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('Test1234!');
        cy.get('#signupRepeatPassword').type('Test1234!');
        cy.contains('Last name is invalid').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });

    it('should show an error for an invalid email', () => {
        cy.get('#signupName').type('Vlada');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type('invalid-email');
        cy.get('#signupPassword').type('Test1234!');
        cy.get('#signupRepeatPassword').type('Test1234!');
        cy.contains('Email is incorrect').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });    

    it('should show an error for a password with 7 characters', () => {
        cy.get('#signupName').type('Vlada');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('Test123');
        cy.get('#signupRepeatPassword').type('Test123');
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });

    it('should show an error for a password with 16 characters', () => {
        cy.get('#signupName').type('Vlada');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('Test1234!Test1234');
        cy.get('#signupRepeatPassword').type('Test1234!Test1234');
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });

    it('should show an error for a password without a lowercase letter', () => {
        cy.get('#signupName').type('Vlada');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('TEST1234!');
        cy.get('#signupRepeatPassword').type('TEST1234!');
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });

    it('should show an error for a password without an uppercase letter', () => {
        cy.get('#signupName').type('Vlada');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('test1234!');
        cy.get('#signupRepeatPassword').type('test1234!');
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });

    it('should show an error for a password without any letters', () => {
        cy.get('#signupName').type('Vlada');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('12345678!');
        cy.get('#signupRepeatPassword').type('12345678!');
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });

    // не высвечивается ошибка, но должна исходя из требований!

    it('should show an error when passwords do not match', () => {
        const password = 'Test1234!';
        const repeatPassword = 'Different123!';
        cy.get('#signupName').type('Vlada');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type(password);
        cy.get('#signupRepeatPassword').type(repeatPassword);
        cy.log(`Entered password: ${password}`);
        cy.log(`Entered repeat password: ${repeatPassword}`);
        cy.get('#signupName').focus();
        cy.contains('Passwords do not match').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });

     it('should show an error for an empty last name', () => {
        cy.get('#signupName').type('Test');
        cy.get('#signupLastName').focus();
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('Test1234!');
        cy.get('#signupRepeatPassword').type('Test1234!'); 
        cy.contains('Last name required').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });
    it('should show an error for an empty name', () => {
        cy.get('#signupName').focus();
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('Test1234!');
        cy.get('#signupRepeatPassword').type('Test1234!');
        cy.contains('Name required').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });
    it('should show an error for an empty email', () => {
        cy.get('#signupName').type('Vlada');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').focus();
        cy.get('#signupPassword').type('Test1234!');
        cy.get('#signupRepeatPassword').type('Test1234!');
        cy.contains('Email required').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });

    it('should show an error for an empty repeat password field', () => {
        cy.get('#signupName').type('Vlada');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').type('Test1234!');
        cy.get('#signupRepeatPassword').focus();
        cy.get('#signupPassword').focus();
        cy.contains('Re-enter password required').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });
    it('should show an error for an empty password', () => {
        cy.get('#signupName').type('Vlada');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type(`test${Date.now()}vs@mailinator.com`);
        cy.get('#signupPassword').focus();
        cy.get('#signupRepeatPassword').type('Test1234!');
        cy.contains('Password required').should('be.visible');
        cy.get('button[type="button"]').should('be.disabled');
    });

});

