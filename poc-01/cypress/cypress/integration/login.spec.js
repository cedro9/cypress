/// <reference types="cypress" />

describe('Ainda não tenho cadastro - PF', () => {
    it('Login com sucesso', () => {
        cy.visit('http://portalrh.valid.com/apdataweb/');
        cy.get('[id="ext-gen40"]').type('thiagocedro9');
        cy.get('[id="ext-gen39"]').type('145270');
        cy.get('[id="ext-gen34"]').click();
    });
});