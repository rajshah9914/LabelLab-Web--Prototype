describe('Contains Scorelab', function() {
    it('Header testing', function() {
      cy.visit('http://localhost:1234/')
      cy.contains('© Copyright 2019 Sustainable Computing Research Group (SCoRe)')  
      cy.contains('Animal Gallery View')
    })
  })