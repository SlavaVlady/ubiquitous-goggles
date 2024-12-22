describe('Registration Tests with Basic Auth', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
        cy.contains('button', 'Sign In').click();
    });

    it(' Log in successfully', () => {
        const email = 'test1734889756918vs@mailinator.com';
        const password = 'Test1234!';
        cy.login(email, password);
        cy.url().should('include', '/panel/garage');
    });
});

