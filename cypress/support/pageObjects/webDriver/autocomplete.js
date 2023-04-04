class food{
    selectFoodFromList(firstLetter, nameFood){
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
    }

}
export default food