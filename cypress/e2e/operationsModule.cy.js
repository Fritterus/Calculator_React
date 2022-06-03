describe('Operations Module tests', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.viewport('macbook-16')
        cy.contains('button', 'C').click()
    })

    it('can multiply numbers', () => {
        cy.contains('button', '5').dblclick()
        cy.contains('button', '*').click()
        cy.contains('button', '2').click()
        cy.contains('button', '=').click()
        cy.get('.emAfyZ').contains('110')
    })

    it('can divide numbers', () => {
        cy.contains('button', '6').dblclick()
        cy.contains('button', '/').click()
        cy.contains('button', '3').dblclick()
        cy.contains('button', '=').click()
        cy.get('.emAfyZ').contains('2')
    })

    it('can add up numbers', () => {
        cy.contains('button', '6').dblclick()
        cy.contains('button', '9').click()
        cy.contains('button', '+').click()
        cy.contains('button', '3').dblclick()
        cy.contains('button', '=').click()
        cy.get('.emAfyZ').contains('702')
    })

    it('can substract numbers', () => {
        cy.contains('button', '4').dblclick()
        cy.contains('button', '3').click()
        cy.contains('button', '-').click()
        cy.contains('button', '3').dblclick()
        cy.contains('button', '=').click()
        cy.get('.emAfyZ').contains('410')
    })

    it('can resolve expression with multiple brackets', () => {   
        cy.contains('button', '(').click()
        cy.contains('button', 2).dblclick()
        cy.contains('button', '+').click()
        cy.contains('button', 8).click()
        cy.contains('button', ')').click()
        cy.contains('button', '*').click()
        cy.contains('button', '(').click()
        cy.contains('button', '4').dblclick()
        cy.contains('button', '-').click()
        cy.contains('button', '4').click()
        cy.contains('button', ')').click()
        cy.contains('button', '=').click()
        cy.get('.emAfyZ').contains('1200')
    })
})