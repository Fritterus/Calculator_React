describe('Display Module tests', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.viewport('macbook-16')
        cy.contains('button', 'C').click()
      })

    it('can write digit on display', () => {
        cy.contains('button', '5').click()
        cy.contains('button', '4').click()
        cy.contains('54')
        cy.contains('button', '7').click()
        cy.contains('547')
        cy.contains('button', '2').dblclick()
        cy.contains('54722')
    })

    it('can delete one digit from display', () => {
        cy.contains('button', '5').click()
        cy.contains('button', '4').click()
        cy.contains('54')
        cy.contains('button', '7').click()
        cy.contains('547')
        cy.contains('button', '2').dblclick()
        cy.contains('54722')
        cy.contains('button', 'CE').click()
        cy.contains('5472')
        cy.contains('button', 'CE').click()
        cy.contains('547')
        cy.contains('button', 'CE').click()
        cy.contains('54')

    })

    it('can delete all from display', () => {
        cy.contains('button', '5').dblclick()
        cy.contains('button', '2').dblclick()
        cy.contains('button', '6').dblclick()
        cy.contains('button', 'C').click()
        cy.get('.emAfyZ').contains('0')
    })
  })