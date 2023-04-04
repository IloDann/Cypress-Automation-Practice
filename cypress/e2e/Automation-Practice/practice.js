/// <reference types="Cypress"/>
import radio from "../../support/pageObjects/AutomationPractice/radioButtons";
import alert from "../../support/pageObjects/AutomationPractice/alerts";


describe('Practice', () => {
    const button = new radio()
    const alerts = new alert()
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    it('Radio buttons, select radio button number 3', () => {
        cy.get('#radio-btn-example').find('[value="radio1"]').click()
        // cy.get('[name="radioButton"]').eq(2).click().should('be.checked')
        button.radioButton(2)


    });
    it('Autocomplete list, select Argentina', () => {
        cy.get('#autocomplete').type('ar')
        cy.get('.ui-menu-item').each(($el, index, $list) => {
            const name = $el.text()
            if (name === 'Argentina')
                cy.wrap($el).click()

        })

    });
    it('Dropdown menu, select option 2', () => {
        // Because dropdown list is not displayed we can not click on it this way, we have to .select()
        // cy.get('#dropdown-class-example').contains('Option3').click({force: true})

        cy.get('#dropdown-class-example').select('Option2') // Select base on text
        
    });
    it('Checkbox, select options 1 and 3', () => {
        cy.get('[type="checkbox"]').check(['option1' , 'option3' ])
        
    });
    it('Alerts', () => {
        alerts.alertWindow('Danilo')
        
        
    });
});