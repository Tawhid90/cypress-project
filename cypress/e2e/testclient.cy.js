/// <reference types="cypress"/>
describe('Movie Search', () => {
    it('passes', () => {
      cy.viewport(1200,700),
      cy.visit('https://sunclass-test.everhub.aero')
      // cy.contains('Skip').click()
    })
  })