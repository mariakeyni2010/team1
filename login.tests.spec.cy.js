describe('Siswa Login Tests', () => {
  const baseUrl = 'https://lms.teknologidigital.co.id/login'; // Ganti dengan URL login siswa

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('TC-AUTH-SI-01: Login berhasil sebagai siswa dengan kredensial valid', () => {
  cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
  cy.get('input[name="password"]').type('maria_ch123');
  cy.get('button[type="submit"]').click();

  cy.url().should('include', '/panel'); // diperbaiki sesuai URL setelah login
  });

 it('TC-AUTH-SI-02: Gagal login jika email kosong', () => {
  // Nonaktifkan validasi HTML5 agar form tetap bisa dikirim
  cy.get('form').invoke('attr', 'novalidate', true);

  // Email dikosongkan
  cy.get('input[name="email"]').should('have.value', '');
  cy.get('input[name="password"]').type('maria_ch123');
  cy.get('button[type="submit"]').click();

  // Verifikasi error dari sistem
  cy.contains('email tidak boleh kosong.').should('be.visible'); // Ini teks yang benar
  });
});
