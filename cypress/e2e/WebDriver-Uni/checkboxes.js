/// <reference types ="Cypress"/>
import radioButton from "../../support/pageObjects/webDriver/radioButtons";

describe('Checkboxes, radio buttons and dropdown list practice', () => {
    const radio = new radioButton()
    beforeEach(() => {
        cy.navigateToPage('#dropdown-checkboxes-radiobuttons')
        
    });
    it('Select all options and validate that option3 is not checked', () => {
        cy.get('[type="checkbox"]').get(['option-1', 'option-2', 'option-4']).should('not.be.visible')
        cy.get('[type="checkbox"]').each(($checkbox) => {
            if($checkbox.is(':checked')){
                cy.wrap($checkbox).uncheck()
            
                
            }else{
                cy.wrap($checkbox).check()
            }

            cy.get('[type="checkbox"]').then(($cb) => {
                if($cb.is(':checked')){
                    cy.wrap($cb).uncheck()
                }
            })

        
        // cy.get('[type="checkbox"]').check(['option-1', 'option-2', 'option-4']).should('be.checked')
        
    });
        
    });
    it('Select Purple radio button', () => {
        
        cy.clickRadioButton(3) // Custom Command

        radio.clickRadioButton(1) // PageObject Modeling
        
    });
    it.only('Select from dropdown list', () => {
        cy.get('#dropdowm-menu-1').select('sql')
        cy.get('#dropdowm-menu-2').select('junit').contains('JUnit')
        cy.get('#dropdowm-menu-3').select('JQuery')

        cy.get('#radio-buttons-selected-disabled').find('[value="lettuce"]').click().should('be.visible')
    });
});