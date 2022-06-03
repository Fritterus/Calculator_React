describe('Theme Toggle tests', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.viewport('macbook-16')
    })

    it('can change theme on dark', () => {
        cy.visit('/Settings')
        cy.get('select').select('dark')
        cy.get('body').should('have.css', 'background-color', 'rgb(67, 67, 67)')
        cy.get('button').should('have.css', 'background-color', 'rgb(74, 64, 64)')
        cy.get('button').should('have.css', 'color', 'rgb(250, 250, 250)')
    })

    it('can change theme on light', () => {
        cy.visit('/Settings')
        cy.get('select').select('light')
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('button').should('have.css', 'background-color', 'rgb(242, 242, 242)')
        cy.get('button').should('have.css', 'color', 'rgb(0, 0, 0)')
    })

})