/// <reference types="Cypress"/>
import autocomplete from "../../support/pageObjects/webDriver/autocomplete";


describe('Autocomplete practice', () => {
    const productName = new autocomplete()
    beforeEach(() => {
        cy.navigateToPage('#autocomplete-textfield')
    })
    it('Select donuts from list', () => {
        cy.get('#myInput').type('D')
        cy.get('.autocomplete-items > div').each(($el) => {
            const foodName = $el.text()
            if(foodName === 'Donuts'){
                cy.wrap($el).click()
                cy.get('#submit-button').click()
            }
        })
        cy.url().should('include', 'Donuts')

        cy.selectFood('a', 'Apple') // Same command but customized
        
        productName.selectFoodFromList('b' , 'Bagels') // PageObject Modeling example
        
    });
});