/// <reference types="Cypress"/>
import alerts from "../../support/pageObjects/webDriver/alerts";
import radioButton from "../../support/pageObjects/webDriver/radioButtons";

describe('Alerts Practice', () => {
    
    const alert = new alerts() // konstanta se mora pozvati ispred svih hukova ukoliko se odnosi na komandu unutar IT bloka, ako se komanda odmah izvrsava posle deklarisanja mozemo je koristiti i unutra hukova 
    

    beforeEach(() => {
        
        cy.navigateToPage('#popup-alerts')
    
    });
    it('Alert buttons test 1', () => {
        alert.clickOnAlert1()
        // cy.get('#button1').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
        
    });
    it('Alert buttons test 4, positive', () => {
        alert.clickOnAlert4()
        // cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!');
            return true;
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
        
    });
    it('Alert buttons test 4, negative', () => {
        alert.clickOnAlert4()
        // cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!');
            return false;
        })
        
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
        
    });
});