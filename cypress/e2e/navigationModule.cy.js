describe('Navigation Module tests', () => {

  it('can visit home page', () => {
    cy.visit('/')
    cy.location('pathname').should('eq', '/')
  })

  it('can visit settings page', () => {
    cy.visit('/Settings')
    cy.location('pathname').should('eq', '/Settings')
  })
})