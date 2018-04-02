const testingUrl = 'http://localhost:3000'

describe('Challenge Page', function(){
    it('', function(){
        cy.visit(testingUrl + '/whatever')
            cy.get('#classname')
                .should('exist')
    })
})