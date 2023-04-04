/// <reference types="Cypress"/>

describe('iFrame Practice', () => {
    beforeEach(()=> {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    afterEach(()=> {
        cy.url().should('include', 'AutomationPractice')
    })

    it('Validate text content inside iFrame', () => {
        cy.get('#courses-iframe').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('[href="practice-project"]').contains('Practice').click()

        
        // cy.get('@iFrame').find('.become-instructor').then($text => {
        //     const textValue = $text.text()
        //     expect(textValue).to.include('Join now to Practice')
        // })

        
        
        
    });
});