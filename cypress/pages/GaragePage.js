class GaragePage {
    navigateToAddCar() {
        cy.get('button.btn-primary')
            .contains('Add car')
            .should('be.visible')
            .click();
    }

    addCar(brand, model, mileage) {
        cy.get('#addCarBrand')
            .should('be.visible')
            .select(brand);

        cy.get('#addCarModel')
            .should('be.visible')
            .select(model);

        cy.get('#addCarMileage')
            .should('be.visible')
            .type(mileage);

  
        cy.get('.modal-content')
            .find('button.btn-primary')
            .contains('Add')
            .should('be.visible')
            .click();

        cy.get('.car-list').should('contain', brand);
    }
}

export default new GaragePage();
