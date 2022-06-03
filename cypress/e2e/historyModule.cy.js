describe('History Module tests', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.viewport('macbook-16')
        cy.contains('button', 'C').click()
    })

    it('can write expression to history', () => {
        cy.contains('button', '9').dblclick()
        cy.contains('button', '+').click()
        cy.contains('button', '5').dblclick()
        cy.contains('button', '-').click()
        cy.contains('button', '2').dblclick()
        cy.contains('button', '*').click()
        cy.contains('button', '2').click()
        cy.contains('button', '=').click()

        cy.contains('button', 'C').click()
        cy.contains('button', '2').dblclick()
        cy.contains('button', '*').click()
        cy.contains('button', '2').click()
        cy.contains('button', '=').click()

        cy.get('li').should('have.length', 2);
    })

    it('can clear history', () => {
        cy.contains('a', 'Settings').click()
        cy.contains('button', 'Clear All History').click();
        cy.contains('a', 'Home').click();
        cy.get('li').should('have.length', 0);
    })

    it('can hide history', () => {
        cy.contains('button', '9').dblclick()
        cy.contains('button', '+').click()
        cy.contains('button', '5').dblclick()
        cy.contains('button', '-').click()
        cy.contains('button', '2').dblclick()
        cy.contains('button', '*').click()
        cy.contains('button', '2').click()
        cy.contains('button', '=').click()

        cy.contains('span', 'History').click()
        cy.contains('span', 'History hidden!').click()

        cy.get('li').should('have.length', 1);

    })

})