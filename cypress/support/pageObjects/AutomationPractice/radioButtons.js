class radio{
    radioButton(index){
        cy.get('[name="radioButton"]').eq(index).click().should('be.checked')
    }

}
export default radio