class ExpensesPage {
    get expenseHeader() {
        return cy.get('.panel-page_heading.d-flex.flex-column.flex-lg-row');
    }

    get expenseSection() {
        return cy.contains('Fuel expenses');
    }

    get carDropdown() {
        return cy.get('.car-select-dropdown.dropdown');
    }

    get addExpenseCarField() {
        return cy.get('#addExpenseCar');
    }

    get addExpenseDateField() {
        return cy.get('#addExpenseDate');
    }

    get addExpenseMileageField() {
        return cy.get('#addExpenseMileage');
    }

    get addExpenseLitersField() {
        return cy.get('#addExpenseLiters');
    }

    get addExpenseTotalCostField() {
        return cy.get('#addExpenseTotalCost');
    }

    get addButton() {
        return cy.get('.modal-content').find('button.btn-primary').contains('Add');
    }

    navigateToExpenses() {
        cy.contains('Add fuel expense').click();
    }

    addExpense(carModel, date, mileage, totalCost, liters) {
        if (carModel) {
            this.addExpenseCarField.then(($carField) => {
                if ($carField.val() === '') {
                    this.addExpenseCarField.select(carModel);
                }
            });
        }

        if (date) {
            this.addExpenseDateField.then(($dateField) => {
                if ($dateField.val() === '') {
                    this.addExpenseDateField.type(date);
                }
            });
        }

        this.addExpenseMileageField.clear().type(mileage);

        if (liters) {
            this.addExpenseLitersField.then(($litersField) => {
                if ($litersField.val() === '') {
                    this.addExpenseLitersField.type(liters);
                }
            });
        }

        if (totalCost) {
            this.addExpenseTotalCostField.then(($totalCostField) => {
                if ($totalCostField.val() === '') {
                    this.addExpenseTotalCostField.type(totalCost);
                }
            });
        }

        this.addButton.should('be.visible').click();
    }
}

export default new ExpensesPage();
