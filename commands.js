// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })Add commentMore actions

Cypress.Commands.add('login', () => {
      cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[placeholder="Alamat Email"]').type('mariakeyni2010@gmail.com');
  cy.get('input[placeholder="Kata Sandi"]').type('maria_ch1234');
  cy.get('button[type="submit"]').click();
  cy.url().should('include','/panel');
});

// login dengan password baru
Cypress.Commands.add('loginBaru', () => {
      cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[placeholder="Alamat Email"]').type('mariakeyni2010@gmail.com');
  cy.get('input[placeholder="Kata Sandi"]').type('maria_ch123');
  cy.get('button[type="submit"]').click();
  cy.url().should('include','/panel');
});