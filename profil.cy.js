describe('Fitur Profil Siswa', () => {

  const email = 'mariakeyni2010@gmail.com';
  const password = 'maria_ch123';

  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login');

    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type('maria_ch123');
    cy.get('button[type="submit"]').should('be.visible').click();

    cy.url().should('include', '/login');

  });
});

  it('TC-PRF-SI-01 - Membuka halaman menu Profil Saya', () => {
    cy.visit('https://lms.teknologidigital.co.id/login');
    cy.login('mariakeyni2010@gmail.com', 'password');
    cy.contains('Profil Saya').click();
    cy.url().should('include', '/profil');
    cy.contains('Kata Sandi').should('exist');

  });

  it('TC-PRF-SI-02 - Mengubah Kata Sandi', () => {
    cy.contains('Profil Saya').click();
    cy.contains('Ubah Kata Sandi').click();

    // Ganti password: dari maria_ch123 ke maria_ch1234
    cy.get('input[placeholder="*Password Lama"]').type('maria_ch123');
    cy.get('input[placeholder="*Password Baru"]').type('maria_ch1234');
    cy.get('input[placeholder="*Konfirmasi Password Baru"]').type('maria_ch1234');
    cy.get('button[type="submit"]').click();

    // Verifikasi berhasil
    cy.contains('kata sandi berhasil diubah', { matchCase: false }).should('be.visible');
  });

  it('TC-PRF-SI-03 - Melihat Opsi Sign Out', () => {
  cy.visit('/login');
  cy.get('input[type="email"]').type('mariakeyni2010@gmail.com');
  cy.get('input[type="password"]').type('maria_ch123');
  cy.get('button[type="submit"]').click();

  cy.contains('mariakeyni2010@gmail.com').click();
  cy.contains('Sign out').should('be.visible');
});
