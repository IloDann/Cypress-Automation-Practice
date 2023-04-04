class alert{
    alertWindow(message){
    cy.get('[placeholder="Enter Your Name"]').type(message)
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.include(message)
        })
    }
}
export default alert