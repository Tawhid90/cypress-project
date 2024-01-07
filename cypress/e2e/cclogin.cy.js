/// <reference types="cypress"/>
describe('Movie Search', () => {
        it('passes', () => {
          cy.viewport(1200,700),
          cy.visit('https://control-centre.inflightdublin.com'),
          cy.get(':nth-child(1) > .jss192 > .jss193 > .jss228 > .jss238').type('tawhid')
          cy.get(':nth-child(2) > .jss192 > .jss193 > .jss228 > .jss238').type('Inflight2310!')
          cy.get('.jss294').click()
        })
      })