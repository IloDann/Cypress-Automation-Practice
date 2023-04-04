/// <reference types="Cypress"/>
import sumUpValues from "../../support/pageObjects/GreenKart/sumUpValues"

describe('Practice', () => {
    const greenKart = new sumUpValues()
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/').wait(1000)
    });
    it('Sum up selected products', () => {
        greenKart.selectProducts('1/4')
        greenKart.checkOut()
        greenKart.sumUp()

    });
});