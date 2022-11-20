/* eslint-disable no-undef */
/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show alert on clicking to start with no name in the input field", function () {
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="login-alert-required-field"]')
      .contains("Player name can not be empty")
      .should("have.class", "login-alert-error");
    cy.get('[data-cy="login-app-name-title"]').should("be.visible");
  });

  it("should navigate to Game on clicking to start with name in the input field", function () {
    cy.get('[data-cy="login-name-input-field"]').type("Foo");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="game-main-container"]').should("be.visible");
  });
});
