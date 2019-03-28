describe('Cloudinary Get request testing', function() {
    it('Get request testing', function() {
        cy.server()    // enable response stubbing
        cy.visit('http://localhost:1234/')
        cy.get('button').click({ multiple: true })
        cy.server({ enable: false })
    })
  })

