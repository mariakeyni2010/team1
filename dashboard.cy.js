describe('Dashboard Siswa', () => {
  const baseUrl = 'https://lms.teknologidigital.co.id';

  before(() => {
    // Login sebelum masuk dashboard
    cy.visit(`${baseUrl}/login`);
    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type('maria_ch123');
    cy.get('button[type="submit"]').click();

    // Verifikasi redirect ke dashboard
    cy.contains('Dashboard').should('be.visible');
  });
});

  it('TC-DASH-SI-01: Menampilkan halaman Dashboard dengan 3 kolom statistik : ', () => {
    cy.contains ('Kelas Aktif')
    cy.contains ('Kelas Belum Aktif')
    cy.contains ('Kelas Arsip')

  });

  it('TC-DASH-SI-02: Verifikasi Tampilan Tugas', () => {
  cy.get('body').then(($body) => {
    describe('Dashboard - Tidak Ada Data', () => {
  beforeEach(() => {
    // Asumsikan login dilakukan sebelum masuk dashboard
    cy.login(); // Ganti dengan langkah login kamu (kalau belum ada, buat custom command atau script login)
    cy.visit('/dashboard'); // Ganti URL ini sesuai dengan URL dashboard-mu
  });

  it('Menampilkan pesan jika tidak ada data tersedia', () => {
    cy.get('body').then(($body) => {
      if ($body.find('[data-cy="tugas-item"]').length > 0) {
        // Jika ada data, pastikan tampil
        cy.get('[data-cy="tugas-item"]').should('be.visible');
      } else {
        // Jika tidak ada data, cari elemen dengan pesan 'Data belum tersedia'
        cy.contains('Data belum tersedia', { matchCase: false }).should('be.visible');
      }
    });
  });
 });
});
  });
  
it('TC-DASH-SI-03: Menampilkan informasi kelas', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[data-cy="info-kelas"]').length > 0) {
      // Kalau ada info kelas
      cy.get('[data-cy="info-kelas"]').should('contain.text', 'Kelas');
    } else if ($body.text().includes('Data belum tersedia')) {
      // Kalau tidak ada data, dan teks-nya memang ada di body
      cy.contains('Data belum tersedia');
    } else {
      // Jika tidak ada keduanya, anggap error
      throw new Error('Tidak ada info kelas maupun pesan "Data belum tersedia"');
    }
  });
});