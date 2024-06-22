import cy from "cypress";
import { describe } from "mocha";

describe("Post List Page", () => {
    it("Carrega e exibe postagens", () => {
        cy.visit('http://localhost:5173');

        cy.contains('Postagens interessantes');

        cy.get('.post-card').should('have.length.greaterThan', 0);


        cy.get('.post-card').first().within(() => {
            cy.get('h2').should('contain.text', 'Expected Post Title');
            cy.get('p').should('contain.text', 'By Expected Author');
            cy.get('p').should('contain.text', 'Expected number of comments comments');
            cy.get('p').should('contain.text', 'Expected number of likes likes');
        });
    });
});



