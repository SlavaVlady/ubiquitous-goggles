class GaragePage {
    get addCarButton() {
        return cy.get('button.btn-primary').contains('Add car');
    }
    get addCarBrandField() {
        return cy.get('#addCarBrand');
    }
    get addCarModelField() {
        return cy.get('#addCarModel');
    }
    get addCarMileageField() {
        return cy.get('#addCarMileage');
    }
    get modalAddButton() {
        return cy.get('.modal-content').find('button.btn-primary').contains('Add');
    }
    get carList() {
        return cy.get('.car-list');
    }
    get lastAddedCarName() {
        return this.carList.find('.car_name').last();
    }

    navigateToAddCar() {
        this.addCarButton.should('be.visible').click();
    }

    addCar(brand, model, mileage) {
        this.addCarBrandField.should('be.visible').select(brand);
        this.addCarModelField.should('be.visible').select(model);
        this.addCarMileageField.should('be.visible').type(mileage);
        this.modalAddButton.should('be.visible').click();
       // this.lastAddedCarName.should('contain', `${brand} ${model}`);
    }
}

export default new GaragePage();
