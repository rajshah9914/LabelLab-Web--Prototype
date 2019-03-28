describe('Click Upload Button', function() {
    it('Click Upload Button', function() {
      cy.visit('http://localhost:1234/')
      cy.get('button').click({ multiple: true }) 
    })
  })