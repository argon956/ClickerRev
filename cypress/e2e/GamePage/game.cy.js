/* eslint-disable no-undef */
/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Game Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should go to Game and show autoclick buy button after scoring 11 points", function () {
    cy.get('[data-cy="login-name-input-field"]').type("Foo");
    cy.get('[data-cy="login-button"]').click();
    for (let i = 0; i < 11; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').should("be.visible");
  });

  it("should go to Game and add 11 points and buy one AutoClicker", function () {
    cy.get('[data-cy="login-name-input-field"]').type("Foo");
    cy.get('[data-cy="login-button"]').click();
    for (let i = 0; i < 11; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').click();
    cy.get('[data-cy="autoclickers-purchased-value-text"]');
    cy.get('[data-cy="autoclickers-purchased-items-text').contains(
      "AutoClickers"
    );
    cy.get(".game-autoclickers-purchased-value-text").contains("1");
  });

  it("should go to Game and add points to can buy two AutoClicker", function () {
    cy.get('[data-cy="login-name-input-field"]').type("Foo");
    cy.get('[data-cy="login-button"]').click();
    for (let i = 0; i < 11; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').click();
    cy.get('[data-cy="autoclickers-purchased-value-text"]');
    cy.get('[data-cy="autoclickers-purchased-items-text"]').contains(
      "AutoClickers"
    );
    cy.get(".game-autoclickers-purchased-value-text").contains("1");
    for (let i = 0; i < 20; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').click();
    cy.get('[data-cy="autoclickers-purchased-value-text"]');
    cy.get('[data-cy="autoclickers-purchased-items-text"]').contains(
      "AutoClickers"
    );
    cy.get(".game-autoclickers-purchased-value-text").contains("2");
  });

  it("should show score counted by thousands and millions from 1000 points onward", function () {
    cy.get('[data-cy="login-name-input-field"]').type("Foo");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="game-score-alternate-text"]').contains("Not available");
    for (let i = 0; i < 11; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').click();
    for (let i = 0; i < 11; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').click();
    for (let i = 0; i < 11; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').click();
    for (let i = 0; i < 11; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').click();
    for (let i = 0; i < 11; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').click();
    for (let i = 0; i < 11; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').click();
    for (let i = 0; i < 11; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').click();
    for (let i = 0; i < 11; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').click();
    cy.get('[data-cy="game-score-alternate-text"]').contains("1.0K");
  });

  it("should show previous score and resume autoclickers on game resume", function () {
    cy.get('[data-cy="login-name-input-field"]').type("Foo");
    cy.get('[data-cy="login-button"]').click();
    for (let i = 0; i < 11; i++) {
      cy.get('[data-cy="score-point-button"]').click();
    }
    cy.get('[data-cy="autoclicker-buy-button"]').click();
    cy.get('[data-cy="autoclickers-purchased-value-text"]');
    cy.get('[data-cy="autoclickers-purchased-items-text').contains(
      "AutoClickers"
    );
    cy.get('[data-cy="game-exit-button"]').click();
    cy.get('[data-testid="login-primary-title"]').contains("Cookie Clicker");
    cy.get('[data-cy="login-name-input-field"]').type("Foo");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="game-score-text"]')
      .invoke("text")
      .should("have.length.greaterThan", 1);
  });

  it("should add current player to the 'hall of fame', with matching score", function () {
    cy.get('[data-cy="login-name-input-field"]').type("Foo");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="score-point-button"]').click();
    cy.get(".game-high-scores-title").contains("Hall of Fame");
    cy.get(".game-high-scores-scoreboard").contains("Foo - 1 points");
  });

  it("should log out", function () {
    cy.get('[data-cy="login-name-input-field"]').type("Foo");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="game-exit-button"]').click();
    cy.get('[data-testid="login-primary-title"]').contains("Cookie Clicker");
  });
});
