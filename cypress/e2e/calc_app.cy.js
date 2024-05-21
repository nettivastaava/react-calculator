describe('Calculator', () => {
  beforeEach(() => {    
    cy.visit('http://localhost:3000')  
  })

  it('calculates correctly addition', () => {
    cy.get('#button-1').click()
    cy.get('#button-\\+').click()
    cy.get('#button-1').click()
    cy.get('#button-\\=').click()

    cy.get('div.result').contains('2')
  })

  it('calculates correctly substraction', () => {
    cy.get('#button-2').click()
    cy.get('#button--').click()
    cy.get('#button-1').click()
    cy.get('#button-\\=').click()

    cy.get('div.result').contains('1')
  })

  it('calculates correctly multiplication', () => {
    cy.get('#button-2').click()
    cy.get('#button-\\×').click()
    cy.get('#button-2').click()
    cy.get('#button-\\=').click()

    cy.get('div.result').contains('4')
  })

  it('calculates correctly division', () => {
    cy.get('#button-8').click()
    cy.get('#button-\\÷').click()
    cy.get('#button-4').click()
    cy.get('#button-\\=').click()

    cy.get('div.result').contains('2')
  })

  it('presents negative result correctly', () => {
    cy.get('#button-1').click()
    cy.get('#button--').click()
    cy.get('#button-2').click()
    cy.get('#button-\\=').click()

    cy.get('div.result').contains('-1')
  })

  it('calculates correctly a sequence of operations', () => {
    cy.get('#button-1').click()
    cy.get('#button-\\+').click()
    cy.get('#button-2').click()
    cy.get('#button-\\×').click()
    cy.get('#button-4').click()
    cy.get('#button-\\÷').click()
    cy.get('#button-3').click()
    cy.get('#button-\\=').click()

    cy.get('div.result').contains('4')
  })
})
