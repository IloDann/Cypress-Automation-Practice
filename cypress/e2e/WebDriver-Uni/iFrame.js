/// <reference types = "Cypress"/>

describe('Practice iFrame', () => {
    beforeEach(() => {
        cy.navigateToPage('#iframe')
        

    })
    it('Validate text content inside iFrame', () => {
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').then($modal => {
            const text = $modal.text()
            expect(text).to.include('webdriveruniversity')
        })
        cy.get('@modal').contains('Close').click()
    });
});