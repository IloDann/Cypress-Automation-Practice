class greenKart{
    selectProducts(nameOfProduct){
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const productName = $el.find('.product-name').text()
            const addToCart = $el.find('[type="button"]')
            if(productName.includes(nameOfProduct))
                cy.wrap(addToCart).click()
        })
    };
    checkOut(){
        cy.get('.cart-icon').click()
        cy.get('.action-block').contains('PROCEED TO CHECKOUT').click()
    };
    sumUp(){
        let productPrice = [];
        let totalPrice = 0;
        cy.get('.cartTable tr td:nth-child(5) > .amount').each(($el, index, $list) => {
            productPrice[index] = $el.text()
            cy.log(productPrice[index])
        }).then(() => {
            let i;
            for (i = 0; i < productPrice.length; i++) {
                let totalPriceNumber = Number(productPrice[i].replace(/[^0-9.-]+/g, "")) // initialize new element to store clean numeric values

                if (Number(totalPriceNumber)) {   // Because it is not array of values we do not have to use [i]
                    totalPrice += totalPriceNumber

                }
            }
            cy.log(totalPrice)

        })
    };


}
export default greenKart