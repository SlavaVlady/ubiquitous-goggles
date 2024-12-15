/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
    });

it('find all header buttons', () => {
    cy.get('header button[class*="header"], header a[class*="header"]').each((button, index) => {
        cy.wrap(button).invoke('text').then(text => {
            cy.log(`Button ${index + 1}: ${text}`);
        });
    }).then(buttons => {
        cy.log(`All buttons found: ${buttons.length}`);
    });
});

it('find header-link buttons inside container', () => {
    cy.get('.container').find('.header-link').each((button, index) => {
        cy.wrap(button).invoke('text').then(text => {
            cy.log(`Button ${index + 1}: ${text}`);
        });
    }).then(buttons => {
        cy.log(`All buttons found: ${buttons.length}`);
    });
});

it('find ans check all footer link', () => {
    cy.get('[class*="socials_link"], [class*="contacts_link"]')
        .each((element, index) => {
            cy.wrap(element).then(($link) => {
                const href = $link.attr('href');
                cy.log(`Link ${index + 1}: ${href}`);
                expect(href).to.not.be.empty;
            });
        })
        .then(links => {
            cy.log(`All links found: ${links.length}`);
        });
});

})



