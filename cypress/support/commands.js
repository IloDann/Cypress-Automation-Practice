// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add('navigateIframe', ()=> {
    cy.visit('/')
    cy.get('#iframe').invoke('removeAttr', 'target').click()

})
Cypress.Commands.add('navigateToPage', (selector)=> {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get(selector).invoke('removeAttr', 'target').click()

})
Cypress.Commands.add('clickRadioButton', (index) =>{
    cy.get('#radio-buttons').find('[type="radio"]').eq(index).click()
})

Cypress.Commands.add('selectFood', (firstLetter, nameFood) => {
    cy.get('#myInput').type(firstLetter)
    cy.get('.autocomplete-items > div').each(($el) => {
        const foodName = $el.text()
        if(foodName === nameFood){
            cy.wrap($el).click()
            cy.get('#submit-button').click()
        }
    }).then(()=> {
        cy.url().should('include', nameFood);

    })
} )
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })