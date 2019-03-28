describe('Contains Scorelab', function() {
    it('Header testing', function() {
      cy.visit('http://localhost:1234/')
      cy.contains('ScoreLab')  
      cy.contains('Animal Gallery View')
    })
  })