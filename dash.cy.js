describe('Dashboard Siswa - test', () => {
  const email = 'mariakeyni2010@gmail.com';
  const password = 'maria_ch1234';

  beforeEach(() => {
    // Bersihkan session biar tidak auto-redirect ke dashboard
    cy.clearCookies();
    cy.clearLocalStorage();

    // Kunjungi halaman login
    cy.visit('https://lms.teknologidigital.co.id/login');
  });

  it('TC-DASH-SI-01: Login dan Akses Dashboard', () => {
    cy.visit('https://lms.teknologidigital.co.id/login', { timeout: 120000 });
    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type('maria_ch1234');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');

    // Verifikasi isi dashboard
    cy.contains('Kelas Aktif');
    cy.contains('Kelas Belum Aktif');
    cy.contains('Kelas Arsip');
  });
});

  it('TC-DASH-SI-02: Verifikasi Tampilan Tugas', () => {
  cy.visit('https://lms.teknologidigital.co.id/login'); 
  cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
  cy.get('input[name="password"]').type('maria_ch1234');
  cy.get('button').contains('Masuk').click();

  cy.contains('Lihat lainnya').click();
  cy.contains('Data belum tersedia')
  });

  it('TC-DASH-SI-03: Verifikasi Opsi Sign Out di Dashboard', () => {
    it('TC-PRF-03= Dropdown pada halaman Profil Saya', () => {
    cy.loginBaru(); 
cy.get('span.overflow-hidden.truncate.max-w-xs')
.should('contain', 'mariakeyni2010@gmail.com')
.click();
cy.contains('Sign out').should('be.visible');
});
  });

  it('Masuk dengan email dan kata sandi valid', () => {
    cy.visit('https://lms.teknologidigital.co.id/login', { timeout: 120000 });
    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type('maria_ch1234');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
  });
