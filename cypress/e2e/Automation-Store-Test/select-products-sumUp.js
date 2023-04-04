/// <reference types="Cypress"/>

describe('Automation-Store-Test Practice', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    });
    it('Select product and sum up total value', () => {
        cy.get('.col-md-3.col-sm-6.col-xs-12').each(($el, index, $list) => {
            const productName = $el.find('.prdocutname').text()
            const productAvailable = $el.find('.fa.fa-cart-plus.fa-fw')
            if(productName === "Tropiques Minerale Loose Bronzer" || productName === 'Acqua Di Gio Pour Homme' || !productAvailable.is(':visible')) {
                cy.log('Product ' + index + ' is not available')
            }else{
                cy.wrap(productAvailable).click()
            }
        })
        cy.get('.cart_total').click()

        let productPrice = [];
        let totalPrice = 0;
        cy.get('.table.table-striped.table-bordered tr td:nth-child(6)').each(($el, index, $list) => {
            productPrice[index] = $el.text()
            cy.log(productPrice[index])

        }).then(() => {
            let i;
            for(i=0 ; i< productPrice.length; i++){
                let price = Number(productPrice[i].replace(/[^0-9.-]+/g, ""))
                if(Number(price)){
                    totalPrice += price
                }
            }
            cy.log(totalPrice)
        })

        
    });
});