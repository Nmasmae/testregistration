describe('Registration Test', () => {
  it('Register new user', () => {
    cy.visit('https://parabank.parasoft.com/parabank/')
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get('.title').should('contain', 'Signing up is easy!')
    cy.get("input[id='customer.firstName']").type('asma')
    cy.get("input[id='customer.lastName']").type('n')
    cy.get("input[id='customer.address.street']").type('tttttt')
    cy.get("input[id='customer.address.city']").type('tttttt')
    cy.get("input[id='customer.address.state']").type('tttttt')
    cy.get("input[id='customer.address.zipCode']").type('tttttt')
    cy.get("input[id='customer.phoneNumber']").type('12233')
    cy.get("input[id='customer.ssn']").type('ERRRR')
    cy.get("input[id='customer.username']").type('asmaaa')
    cy.get("input[id='customer.password']").type('asma')
    cy.get("input[id='repeatedPassword']").type('asma')
    cy.get('[colspan="2"] > .button').click()
    cy.get('.title').should('contain','Welcome asmaaa')
    cy.wait(4000)
    cy.get('#leftPanel > ul > :nth-child(8) > a').click()
    cy.get(':nth-child(2) > .input').type('asmaaa')
    cy.get(':nth-child(4) > .input').type('asma')
    cy.get(':nth-child(5) > .button').click()
    cy.get('#showOverview > .title').should('be.visible')





    


    
   


  })
})