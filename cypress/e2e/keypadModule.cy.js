describe('Keypad Module tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('macbook-16');
    cy.contains('button', 'C').click();
  });

  it('should have button on keypad', () => {
    cy.contains('button', '1');
    cy.contains('button', '2');
    cy.contains('button', '3');
    cy.contains('button', '4');
    cy.contains('button', '5');
    cy.contains('button', '6');
    cy.contains('button', '7');
    cy.contains('button', '8');
    cy.contains('button', '9');
    cy.contains('button', '0');
    cy.contains('button', '*');
    cy.contains('button', '/');
    cy.contains('button', '+');
    cy.contains('button', '-');
    cy.contains('button', 'C');
    cy.contains('button', 'CE');
    cy.contains('button', '=');
    cy.contains('button', '.');
    cy.contains('button', '%');
    cy.contains('button', '(');
    cy.contains('button', ')');
  });

  it('can\'t enter multiple dots', () => {
    cy.contains('button', '5').click();
    cy.contains('button', '.').dblclick();
    cy.contains('button', '.').dblclick();
    cy.get('.emAfyZ').contains('5.');
  });

  it('can\'t enter multiple plus signs', () => {
    cy.contains('button', '5').click();
    cy.contains('button', '+').dblclick();
    cy.contains('button', '+').dblclick();
    cy.get('.emAfyZ').contains('5+');
  });

  it('can\'t enter multiple minus signs', () => {
    cy.contains('button', '7').dblclick();
    cy.contains('button', '-').dblclick();
    cy.contains('button', '-').dblclick();
    cy.get('.emAfyZ').contains('77-');
  });

  it('can\'t enter multiple division signs', () => {
    cy.contains('button', '3').dblclick();
    cy.contains('button', '/').dblclick();
    cy.contains('button', '/').dblclick();
    cy.get('.emAfyZ').contains('33/');
  });

  it('can\'t enter multiple multiplication signs', () => {
    cy.contains('button', '6').dblclick();
    cy.contains('button', '2').click();
    cy.contains('button', '*').dblclick();
    cy.contains('button', '*').dblclick();
    cy.get('.emAfyZ').contains('662*');
  });
});
