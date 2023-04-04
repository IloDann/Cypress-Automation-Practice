class radioButton {
    clickRadioButton(index){
        cy.get('#radio-buttons').find('[type="radio"]').eq(index).click()

    }
}
export default radioButton