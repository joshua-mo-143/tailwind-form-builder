import { type } from "os";

describe('empty spec', () => {
  it('loads the page properly', () => {
    cy.visit('http://localhost:5173');
  })

  it('can create a new section', () => {
    cy.get('#newSectionTitle').click();
    cy.get('#new-section-panel').type("heehee");
    cy.get('#newSectionSubmit').click();
  })

})