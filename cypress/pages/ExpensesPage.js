class ExpensesPage {
    navigateToExpenses() {
        cy.contains('Add an expense').click();
    }

    addExpense(carModel, date, mileage, totalCost, liters) {
        if (carModel) {
            cy.get('#addExpenseCar').then($carField => {
                if ($carField.val() === '') {
                    cy.get('#addExpenseCar').select(carModel);
                }
            });
        }

        if (date) {
            cy.get('#addExpenseDate').then($dateField => {
                if ($dateField.val() === '') {
                    cy.get('#addExpenseDate').type(date);
                }
            });
        }

        cy.get('#addExpenseMileage').clear().type(mileage); 

        if (liters) {
            cy.get('#addExpenseLiters').then($litersField => {
                if ($litersField.val() === '') {
                    cy.get('#addExpenseLiters').type(liters);
                }
            });
        }

        if (totalCost) {
            cy.get('#addExpenseTotalCost').then($totalCostField => {
                if ($totalCostField.val() === '') {
                    cy.get('#addExpenseTotalCost').type(totalCost);
                }
            });
        }

        cy.get('.modal-content')
            .find('button.btn-primary')
            .contains('Add')
            .should('be.visible')
            .click();
    }
}

export default new ExpensesPage();


