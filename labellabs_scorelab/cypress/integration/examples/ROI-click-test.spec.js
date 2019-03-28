describe('Cloudinary Get request testing', function() {
    it('Get request testing', function() {
        cy.server()    // enable response stubbing
        cy.visit('http://localhost:1234/')
        cy.get('button').click({ multiple: true })
//         cy.get('button').click({ multiple: true }) 
//         cy.contains('div', 'Select Files').find('Select Files').click();
//         // cy.fixture('images/animals.jpeg')          
//         cy.fixture('images/animals.jpeg').as('animals')
//             .get('input[type=file]').then(function(el) {
//                 return Cypress.Blob.base64StringToBlob(this.animals, 'animals.jpeg')
//                 .then(blob => {
//             el[0].files[0] = blob
//             el[0].dispatchEvent(new Event('change', {bubbles: true}))
//       })
//   })
//         cy.get('button').contains("CLICK HERE FOR ROI SELECTION.").click({ multiple: true })       
        cy.route({
          method: 'GET',      // Route all GET requests
          url: '/',    // that have a URL that matches '/'
          response: []        // and force the response to be: []
        })
        cy.server({ enable: false })
    })
  })

